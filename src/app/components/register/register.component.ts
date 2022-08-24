import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const REGISTER_API =
  'http://user-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/user/v1/register';
const VERIFY_EMAIL_API =
  'http://user-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/user/v1/verification-link/';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private token: TokenStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      email: [''],
      password: [''],
      scdPassword: [''],
      phoneNum: [''],
      dateOb: [''],
      gender: [''],
    });
  }

  registerUser() {
    this.http.post<any>(REGISTER_API, this.registerForm.value).subscribe(
      (isi) => {
        alert('Register sukses, silahkan cek email anda untuk verifikasi');
        this.registerForm.reset();
        // console.log(isi.id);
        this.verifyEmail(isi.id);
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.error.message);
        console.log(err);
      }
    );
  }

  verifyEmail(id: any): any {
    this.http.get<any>(VERIFY_EMAIL_API + id).subscribe(
      (isi) => {},
      (err) => {
        console.log(err);
      }
    );
  }
}
