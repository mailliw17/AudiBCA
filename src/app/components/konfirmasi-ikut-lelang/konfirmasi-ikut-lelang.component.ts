import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const GET_DETAIL_API =
  'http://auction-object-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/get/';
const GET_KTP_API =
  'http://ktp-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/ktp/user/';
const GET_NPWP_API =
  'http://ktp-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/npwp/user/';
const CREATE_VA_API =
  'http://virtuall-account-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/create?category=jaminan';
const GET_REKENING_DATA_API =
  'http://ktp-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/rekening/user/';

@Component({
  selector: 'app-konfirmasi-ikut-lelang',
  templateUrl: './konfirmasi-ikut-lelang.component.html',
  styleUrls: ['./konfirmasi-ikut-lelang.component.css'],
})
export class KonfirmasiIkutLelangComponent implements OnInit {
  disabledButton = false;
  isLoggedIn = false;
  detailDataAuctionObject: any = {};
  valueAuctionObject: any;
  idAuctionObject: any;
  dataKtp: any = {};
  dataNpwp: any = {};
  dataRekening: any = {};
  vaForm: any;

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
    // cara tau user sudah login atau belum
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.getDetailData();
      this.getKtpData();
      this.getNpwpData();
      this.getRekeningData();
    }
  }

  getDetailData() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(GET_DETAIL_API + id).subscribe(
      (isi) => {
        // console.log(isi);
        this.detailDataAuctionObject = isi;
        this.valueAuctionObject = isi.collateralQuantity;
        this.idAuctionObject = isi.id;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getKtpData() {
    const user = this.token.getUser();
    this.http.get<any>(GET_KTP_API + user.id, this.httpOptions_base).subscribe(
      (isi) => {
        // console.log(isi);
        this.dataKtp = isi;
      },
      (err) => {
        this.dataKtp = 0;
        // console.log(err);
      }
    );
  }

  getNpwpData() {
    const user = this.token.getUser();
    this.http.get<any>(GET_NPWP_API + user.id, this.httpOptions_base).subscribe(
      (isi) => {
        this.dataNpwp = isi;
      },
      (err) => {
        this.dataNpwp = 0;
        // console.log(err);
      }
    );
  }

  getRekeningData() {
    const user = this.token.getUser();
    this.http
      .get<any>(GET_REKENING_DATA_API + user.id, this.httpOptions_base)
      .subscribe(
        (isi) => {
          // PAKAI INDEX KARENA DARI BE DIKASIH ARRAY BUKAN LANGUNSG OBJECT
          this.dataRekening = isi[0];
          // console.log(isi[0]);
        },
        (err) => {
          this.dataRekening = 0;
          // console.log(err);
        }
      );
  }

  createVirtualAccount() {
    const user = this.token.getUser();
    this.vaForm = {
      auctionobjectId: this.idAuctionObject,
      userId: user.id,
      value: this.valueAuctionObject,
    };
    // console.log(this.vaForm);
    this.http
      .post<any>(CREATE_VA_API, this.vaForm, this.httpOptions_base)
      .subscribe(
        (isi) => {
          alert('Sukses membuat transaksi');
          this.router.navigate(['status-lelang']);
        },
        (err) => {
          console.log(err);
          alert(
            'Kamu sudah pernah melakukan booking lot lelang ini sebelumnya !'
          );
          // this.router.navigate(['/status-lelang']);
        }
      );
  }
}
