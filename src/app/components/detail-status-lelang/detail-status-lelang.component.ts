import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const PAY_VA_API = 'http://10.1.137.50:8772/pay/';
const GET_BY_ID_API = 'http://10.1.137.50:8772/get/';

@Component({
  selector: 'app-detail-status-lelang',
  templateUrl: './detail-status-lelang.component.html',
  styleUrls: ['./detail-status-lelang.component.css'],
})
export class DetailStatusLelangComponent implements OnInit {
  dataVA: any = {};
  payVAFrom: any;
  // token for get anything data
  httpOptions_base = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token.getToken()}`
    ),
  };
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private token: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDataById();
  }

  getDataById() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(GET_BY_ID_API + id, this.httpOptions_base).subscribe(
      (isi) => {
        // console.log(isi);
        this.dataVA = isi;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  payVA() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http
      .put<any>(PAY_VA_API + id, this.payVAFrom, this.httpOptions_base)
      .subscribe(
        (isi) => {
          this.router.navigate(['konfirmasi-pembayaran-jaminan']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
