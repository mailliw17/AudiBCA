import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-main-profil-ganti-password',
  templateUrl: './main-profil-ganti-password.component.html',
  styleUrls: ['./main-profil-ganti-password.component.css'],
})
export class MainProfilGantiPasswordComponent implements OnInit {
  public gantiPasswordForm!: FormGroup;
  isError = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private router: Router,
    private profile: ProfileService
  ) {}

  ngOnInit(): void {
    this.gantiPasswordForm = this.formBuilder.group({
      id: this.token.getUser().id,
      oldPassword: [''],
      newPassword: [''],
      confirmPassword: [''],
    });
  }

  changePassword(): void {
    const userData = this.profile
      .changePassword(this.gantiPasswordForm.value)
      .subscribe(
        (isi) => {
          alert('Password berhasil diubah');
          this.gantiPasswordForm.reset();

          this.token.signOut();
          this.router.navigate(['/login']);
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isError = true;
          this.ngOnInit();
        }
      );
  }
}
