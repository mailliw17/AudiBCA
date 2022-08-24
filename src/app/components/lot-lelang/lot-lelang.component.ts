import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { City } from 'src/app/_class/city';
import { Province } from 'src/app/_class/province';
import { AddressService } from 'src/app/_services/address.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { filter } from 'rxjs/operators';
import { CurrencyMaskInputMode } from 'ngx-currency';

// for faster development
const GET_ALL_API =
  'http://auction-object-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/getAllUser';
const FILTER_API =
  'http://auction-object-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/getAuctionObjectFilter';

@Component({
  selector: 'app-lot-lelang',
  templateUrl: './lot-lelang.component.html',
  styleUrls: ['./lot-lelang.component.css'],
})
export class LotLelangComponent implements OnInit {
  filterForm!: FormGroup;
  dataAuctionObject: any = [];
  provinceData: Province[] = [];
  cityData: City[] = [];
  currPage: number = 0;
  totalElements: number = 0;
  pages: number = 0;
  isClicked = [];

  options = {
    prefix: '',
    thousands: '.',
    decimal: ',',
    allowZero: true,
    inputMode: CurrencyMaskInputMode.FINANCIAL,
    nullable: true,
    precision: 0,
  };

  constructor(
    private http: HttpClient,
    private address: AddressService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currPage = params['page'] ? params['page'] - 1 : 0;
    });

    this.getAllData();

    this.address.getProvince().subscribe(
      (isi) => {
        this.provinceData = isi;
      },
      (err) => {
        console.log(err);
      }
    );

    this.filterForm = this.formBuilder.group({
      startPrice: [''],
      endPrice: [''],
      province: [''],
      city: [''],
    });
  }

  provinceChanged() {
    // console.log(this.filterForm.value.province);
    this.address.getCity(this.filterForm.value.province).subscribe((isi) => {
      this.cityData = isi;
    });
  }

  getAllData() {
    const params = new HttpParams()
      .set('page', this.currPage.toString())
      .set('size', '8');
    this.http.get<any>(GET_ALL_API, { params }).subscribe(
      (isi) => {
        // console.log(isi);
        this.dataAuctionObject = isi.content;
        this.totalElements = isi.totalElements;
        this.pages = Math.ceil(this.totalElements / 9);
        // console.log(this.dataAuctionObject);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  filtering() {
    this.currPage = 0;
    const params = new HttpParams()
      .set('startPrice', this.filterForm.value.startPrice)
      .set('endPrice', this.filterForm.value.endPrice)
      .set('province', this.filterForm.value.province)
      .set('city', this.filterForm.value.city)
      .set('page', this.currPage.toString())
      .set('size', '8');
    this.http.get<any>(FILTER_API, { params }).subscribe(
      (isi) => {
        // console.log(isi.content);
        this.dataAuctionObject = isi.content;
        this.totalElements = isi.totalElements;
        this.pages = Math.ceil(this.totalElements / 8);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
