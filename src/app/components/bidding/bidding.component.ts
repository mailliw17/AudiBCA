import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CurrencyMaskInputMode } from 'ngx-currency';
import Swal from 'sweetalert2';

const GET_AO_API = 'http://10.1.137.50:8766/get/';
const GET_BIDDING_BY_AOID_API = 'http://10.1.137.50:8768/getByAuctionObj/';
const BID_API = 'http://10.1.137.50:8768/create';
const VERIFY_PASSWORD_API = 'http://10.1.137.50:8760/user/v1/verify-password';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css'],
  providers: [ProfileService],
})
export class BiddingComponent implements OnInit {
  detailDataAuctionObject: any = {};
  biddingData: any[] = [];
  userData: any;
  highestPrice: any;
  hargaAwal: any;
  kelipatan: any;
  isBidBefore = false;
  subscription!: Subscription;
  bidExpire: any;

  options = {
    prefix: '',
    thousands: ',',
    decimal: '.',
    allowZero: true,
    inputMode: CurrencyMaskInputMode.FINANCIAL,
    nullable: true,
    precision: 2,
  };

  public dateNow = new Date();
  public dDay = new Date();
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;

  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
        this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
        this.hoursInADay
    );
    this.daysToDday = Math.floor(
      timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute *
          this.hoursInADay)
    );
  }

  public biddingForm: FormGroup = new FormGroup({
    value: new FormControl(),
    password: new FormControl(),
    userId: new FormControl(),
    auctionObjectId: new FormControl(),
  });

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
    this.httpOptions_base = {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.token.getToken()}`
      ),
    };
    this.getUserData();
    this.getAOData();
    this.getHighestPrice();
  }

  // THIS FUNCTION CALLED EVERY 1 SECOND
  getHighestPrice() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.subscription = timer(0, 1000)
      .pipe(switchMap(() => this.profile.getLivePrice(id)))
      .subscribe(
        (isi) => {
          this.biddingData = isi;

          if (this.biddingData.length > 0) {
            this.isBidBefore = true;
            this.highestPrice = isi[0].value;
          } else {
            this.isBidBefore = false;
            this.highestPrice = this.hargaAwal;
          }

          // REDIRECT IF BID EXPIRED
          const current = new Date().getTime();
          const exp = new Date(this.bidExpire).getTime();
          if (current > exp) {
            // LANGSUNG PAKSA REDIRECT DAN TIDAK BISA KEMBALI
            this.kickBidExpire();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  kickBidExpire() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['lot-lelang/pengumuman-bidding/' + id]);
  }

  getAOData() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(GET_AO_API + id).subscribe(
      (isi) => {
        // console.log(isi);
        this.detailDataAuctionObject = isi;
        this.kelipatan = isi.initialPrice * 0.01;
        this.hargaAwal = isi.initialPrice;
        this.bidExpire = isi.bidExpire;
        this.dDay = new Date(isi.bidExpire);
        this.subscription = interval(1000).subscribe((x) => {
          this.getTimeDifference();
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUserData() {
    const aoID = String(this.route.snapshot.paramMap.get('id'));
    this.profile.getUserData().subscribe(
      (isi) => {
        // console.log(isi);
        this.userData = isi;

        //ASSIGN THE VALUE TO THE FORM
        this.biddingForm.patchValue({
          password: '',
          value: this.highestPrice,
          userId: this.userData.id,
          auctionObjectId: aoID,
        });

        // console.log(this.biddingForm.value);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createBidding() {
    this.http
      .post<any>(
        VERIFY_PASSWORD_API,
        this.biddingForm.value,
        this.httpOptions_base
      )
      .subscribe(
        (isi) => {
          this.http
            .post<any>(BID_API, this.biddingForm.value, this.httpOptions_base)
            .subscribe(
              (isi) => {
                alert('Sukses membuat harga bid baru');
                this.ngOnInit();
              },
              (err) => {
                alert('Gagal membuat harga bid baru');
                console.log(err);
              }
            );
        },
        (err) => {
          alert('Password anda salah');
          console.log(err);
        }
      );
  }

  increaseBid() {
    console.log(this.biddingForm.get('value')?.value);
    if(this.biddingForm.get('value')?.value === undefined) {
      this.biddingForm.patchValue({
        value: this.highestPrice + this.kelipatan,
      });
    } else {
      this.biddingForm.patchValue({
        value: this.biddingForm.get('value')?.value + this.kelipatan,
      });
    }
  }

  increaseBidX10() {
    if(this.biddingForm.get('value')?.value === undefined) {
      this.biddingForm.patchValue({
        value: this.highestPrice + this.kelipatan * 10,
      });
    } else {
      this.biddingForm.patchValue({
        value: this.biddingForm.get('value')?.value + this.kelipatan * 10,
      });
    }
  }

  decreaseBid() {
    if(this.biddingForm.get('value')?.value === undefined) {
      this.biddingForm.patchValue({
        value: this.highestPrice - this.kelipatan,
      });
    } else {
      this.biddingForm.patchValue({
        value: this.biddingForm.get('value')?.value - this.kelipatan,
      });
    }
  }

  decreaseBidX10() {
    if(this.biddingForm.get('value')?.value === undefined) {
      this.biddingForm.patchValue({
        value: this.highestPrice - this.kelipatan * 10,
      });
    } else {
      this.biddingForm.patchValue({
        value: this.biddingForm.get('value')?.value - this.kelipatan * 10,
      });
    }
  }

  isNumber(value: any) {
    return Number.isNaN(value);
  }
}
