import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const GET_BIDDING_BY_AOID_API =
  'http://bidding-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/getByAuctionObj/';
const GET_DETAIL_API =
  'http://auction-object-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/get/';
const CREATE_VA_API =
  'http://virtuall-account-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/create?category=pelunasan';
const CAN_USER_KRP_API =
  'http://creditscoringroute-website-lelang-bca-dev.apps.ocpdev.dti.co.idCreditScoreByKTP/';
const GET_KTP_BY_USERID_API =
  ' http://ktp-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/ktp/user/';

@Component({
  selector: 'app-pengumuman-bidding',
  templateUrl: './pengumuman-bidding.component.html',
  styleUrls: ['./pengumuman-bidding.component.css'],
})
export class PengumumanBiddingComponent implements OnInit {
  biddingData: any;
  biddingDataWinner: any;
  userData: any;
  vaForm: any;
  idAuctionObject: any;
  dpAuctionObject: any;
  idUser: any;
  nik: any;
  baru: any;
  panelOpenState = false;
  kprForm: any = new FormData();
  risiko: any;

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
    private router: Router,
    private profile: ProfileService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getHistoryBid();
    this.getUserData();
    this.getDataAO();
  }

  getHistoryBid() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http
      .get<any>(GET_BIDDING_BY_AOID_API + id, this.httpOptions_base)
      .subscribe(
        (isi) => {
          this.biddingData = isi;
          this.biddingDataWinner = isi[0];
          // console.log(this.biddingDataWinner);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  async getUserData() {
    await this.profile.getUserDataSync().then(
      (isi) => {
        this.userData = isi;
        this.idUser = isi.id;

        this.kprForm.append('sex_cd', isi.gender);
        this.kprForm.append('credit_limit', isi.loanAmount);
        this.kprForm.append('income', isi.income);
        this.kprForm.append('dob', isi.dateOb);

        // this.kprForm = {
        //   sex_cd: isi.gender,
        //   credit_limit: isi.loanAmount,
        //   income: isi.income,
        //   dob: isi.dateOb,
        // };

        // console.log(this.kprForm);
      },
      (err) => {
        console.log(err);
      }
    );

    await firstValueFrom(
      this.http.get<any>(
        GET_KTP_BY_USERID_API + this.idUser,
        this.httpOptions_base
      )
    ).then(
      (isi) => {
        this.nik = isi.ktpNo;
        // console.log(this.nik);
      },
      (err) => {
        console.log(err);
      }
    );

    this.canUserKPR();
  }

  getDataAO() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(GET_DETAIL_API + id).subscribe(
      (isi) => {
        // console.log(isi);
        this.idAuctionObject = isi.id;
        this.dpAuctionObject = isi.collateralQuantity;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createVirtualAccount() {
    const user = this.token.getUser();
    const biayaPelunasan = this.biddingDataWinner.value - this.dpAuctionObject;
    this.vaForm = {
      auctionobjectId: this.idAuctionObject,
      userId: user.id,
      value: biayaPelunasan,
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
            'Kamu sudah pernah melakukan transaksi ini sebelumnya, silahkan bayar !'
          );
          this.router.navigate(['/pelunasan-lelang']);
        }
      );
  }

  canUserKPR() {
    // console.log(this.formData);
    this.http.post<any>(CAN_USER_KRP_API + this.nik, this.kprForm).subscribe(
      (isi) => {
        this.risiko = isi.Risk_Level;
        // console.log(isi);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
