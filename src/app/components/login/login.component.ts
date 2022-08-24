import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';
import { NavbarComponent } from '../navbar/navbar.component';

const GET_PROFILE =
  'http://user-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/user/v1/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userData: any;
  currentUser: any;
  httpOptions_base: any;

  constructor(
    private authService: AuthService,
    private token: TokenStorageService,
    private router: Router,
    private http: HttpClient // private navbar: NavbarComponent
  ) {}

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      // this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (data) => {
        // menyimpan access_token di session storage
        this.token.saveToken(data.access_token);
        this.token.saveRefreshToken(data.refresh_token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.router.navigate(['/home']);

        // token for get anything data
        // set this variable when user submit the login form
        this.httpOptions_base = {
          headers: new HttpHeaders().set(
            'Authorization',
            `Bearer ${this.token.getToken()}`
          ),
        };
        this.routingUserByRole();
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  routingUserByRole(): any {
    this.http.get(GET_PROFILE, this.httpOptions_base).subscribe(
      (isi) => {
        this.token.saveUser(isi);
        this.currentUser = this.token.getUser();
        // console.log('oke');

        if (this.currentUser.role[0] == 'admin') {
          this.authService.logout();
          this.token.signOut();
          // swal fire with button ok
          Swal.fire({
            title: 'Oops...',
            text: 'Anda tidak memiliki akses!',
            icon: 'error',
            confirmButtonText: 'OK',
          }).then(() => {
            this.reloadPage();
          });
        } else if (this.currentUser.role[0] == 'operator') {
          this.authService.logout();
          this.token.signOut();
          // swal fire with button ok
          Swal.fire({
            title: 'Oops...',
            text: 'Anda tidak memiliki akses!',
            icon: 'error',
            confirmButtonText: 'OK',
          }).then(() => {
            this.reloadPage();
          });
        } else if (this.currentUser.role[0] == 'user') {
          this.router.navigate(['/home']);
        }
      },
      (err) => {
        console.log(err);
        // console.log('Error when routing');
      }
    );
  }
}
