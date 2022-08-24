import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const GET_KPR_BY_USERID_API = 'http://10.1.137.50:8774/get/user/';

@Component({
  selector: 'app-main-profil-riwayat-kpr',
  templateUrl: './main-profil-riwayat-kpr.component.html',
  styleUrls: ['./main-profil-riwayat-kpr.component.css'],
})
export class MainProfilRiwayatKprComponent implements OnInit {
  kprData: any;
  // token for get anything data
  httpOptions_base = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token.getToken()}`
    ),
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private token: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    const user = this.token.getUser();
    this.http
      .get<any>(GET_KPR_BY_USERID_API + user.id, this.httpOptions_base)
      .subscribe(
        (isi) => {
          this.kprData = isi;
          console.log(this.kprData);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
