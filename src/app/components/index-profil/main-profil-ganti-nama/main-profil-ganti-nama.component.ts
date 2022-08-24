import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-main-profil-ganti-nama',
  templateUrl: './main-profil-ganti-nama.component.html',
  styleUrls: ['./main-profil-ganti-nama.component.css'],
})
export class MainProfilGantiNamaComponent implements OnInit {
  editUserForm: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private router: Router,
    private profile: ProfileService
  ) {}

  ngOnInit(): void {
    const userData = this.profile.getUserData().subscribe(
      (isi) => {
        this.editUserForm = isi;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateUserData(): void {
    const userData = this.profile
      .updateUserData(this.editUserForm.id, this.editUserForm)
      .subscribe(
        (isi) => {
          alert('Data berhasil diubah');
          this.token.saveUser(isi);
          this.router.navigate(['/home']);
        },
        (err) => {
          alert('Data gagal diubah');
          console.log(err);
        }
      );
  }
}
