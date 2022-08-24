import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const GET_VA_BY_ID_API =
  'http://virtuall-account-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/getbyuserid/';

@Component({
  selector: 'app-main-profil-status-lelang',
  templateUrl: './main-profil-status-lelang.component.html',
  styleUrls: ['./main-profil-status-lelang.component.css'],
})
export class MainProfilStatusLelangComponent implements OnInit {
  vaData: any[] = [];
  aoData: any = [];
  aoId: any[] = [];

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
      .get<any>(GET_VA_BY_ID_API + user.id, this.httpOptions_base)
      .subscribe(
        (isi) => {
          // FOREACH 'ISI' UNTUK MENGAMBIL VIRTUAL ACCOUNT NUMBER YANG DEPANNYA 697 (JAMINAN)
          isi.forEach((element: { noVa: any }) => {
            var terserah: string = element.noVa;
            if (terserah.substring(0, 3) === '697') {
              this.vaData.push(element);
            }
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
