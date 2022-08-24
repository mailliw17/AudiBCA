import { Component, OnInit } from '@angular/core';
import { KtpService } from 'src/app/_services/ktp.service';
import { RekeningService } from 'src/app/_services/rekening.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { NpwpService } from '../../_services/npwp.service';
import { Ktp } from '../index-profil/main-profil-ktp/ktp';
import { Npwp } from '../index-profil/main-profil-npwp/npwp';
import { Rekening } from '../index-profil/main-profil-rekening-bank/rekening';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileService } from '../../_services/profile.service';
import { User } from '../navbar/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const REKOMENDASI_PROPERTI_API =
  'http://recommendation-route-website-lelang-bca-dev.apps.ocpdev.dti.co.id/getAllRecAuctionById/';

const GET_AUCTION_BY_ID =
  'http://auction-object-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/get/';

@Component({
  selector: 'app-latest-properties',
  templateUrl: './latest-properties.component.html',
  styleUrls: ['./latest-properties.component.css'],
})
export class LatestPropertiesComponent implements OnInit {
  imgUrl: string = 'assets/img/property-6.jpg';
  isLoggedIn = false;
  ktpData!: Ktp;
  npwpData!: Npwp;
  rekeningData!: Rekening[];
  dataAuctionObject: any = [];
  isKtpExist: boolean = false;
  isNpwpExist: boolean = false;
  isRekeningExist: boolean = false;
  isLoanExist: boolean = false;
  isIncomeExist: boolean = false;
  isRecommendationExist: boolean = false;
  AuctionObjectId: any;

  constructor(
    private token: TokenStorageService,
    private ktp: KtpService,
    private npwp: NpwpService,
    private rekening: RekeningService,
    private profile: ProfileService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (this.token.getToken()) {
      // console.log('sudah login');
      // console.log(this.token.getToken());
      this.isLoggedIn = true;
      this.ktp.httpOptions_base = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token.getToken()}`,
        }),
      };
      this.npwp.httpOptions_base = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token.getToken()}`,
        }),
      };
      this.rekening.httpOptions_base = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token.getToken()}`,
        }),
      };
      this.profile.httpOptions_base = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token.getToken()}`,
        }),
      };
      this.getDataUser();
    }
  }

  getDataUser() {
    this.profile.getUserData().subscribe(
      (isi) => {
        if (isi.loanAmount != null) {
          this.isLoanExist = true;
        }
        if (isi.income != null) {
          this.isIncomeExist = true;
        }
        this.getKtpData();
        this.getNpwpData();
        this.getRekeningData();
        this.getRekomendasi();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getKtpData() {
    this.ktp.getKtpData(this.token.getUser().id).subscribe(
      (isi) => {
        this.ktpData = isi;
        this.isKtpExist = true;
        // console.log(this.ktpData);
      },
      (err) => {
        this.isKtpExist = false;
        console.log(this.isKtpExist);
      }
    );
  }

  getNpwpData() {
    this.npwp.getNpwpData(this.token.getUser().id).subscribe(
      (isi) => {
        this.npwpData = isi;
        this.isNpwpExist = true;
        // console.log(this.npwpData);
      },
      (err) => {
        this.isNpwpExist = false;
        console.log(this.isNpwpExist);
      }
    );
  }

  getRekeningData() {
    this.rekening.getRekeningData(this.token.getUser().id).subscribe(
      (isi) => {
        this.rekeningData = isi;
        this.isRekeningExist = true;
        // console.log(this.rekeningData);
      },
      (err) => {
        this.isRekeningExist = false;
        console.log(this.isRekeningExist);
      }
    );
  }

  getRekomendasi() {
    const id_user = this.token.getUser().id;
    this.http.get(REKOMENDASI_PROPERTI_API + id_user).subscribe(
      (isi) => {
        var i = 0;
        this.AuctionObjectId = isi;
        this.isRecommendationExist = true;
        for (var val of this.AuctionObjectId.AuctionObjectId) {
          console.log(i);
          if (i >= 3) {
            break;
          } else {
            this.http.get(GET_AUCTION_BY_ID + val).subscribe((isi) => {
              this.dataAuctionObject.push(isi);
              console.log(this.dataAuctionObject);
            });
            i = i + 1;
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
