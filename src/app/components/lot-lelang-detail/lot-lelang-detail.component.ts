import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailInfoPenjualComponent } from '../dialog/detail-info-penjual/detail-info-penjual.component';
import { DetailInfoPenyelenggaraComponent } from '../dialog/detail-info-penyelenggara/detail-info-penyelenggara.component';
import { DetailLampiranComponent } from '../dialog/detail-lampiran/detail-lampiran.component';
import { TokenStorageService } from '../../_services/token-storage.service';

const GET_DETAIL_API =
  'http://auction-object-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/get/';

@Component({
  selector: 'app-lot-lelang-detail',
  templateUrl: './lot-lelang-detail.component.html',
  styleUrls: ['./lot-lelang-detail.component.css'],
})
export class LotLelangDetailComponent implements OnInit {
  detailDataAuctionObject: any = {};
  logging: any = {};
  httpOptions_base = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token.getToken()}`
    ),
  };

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private route: ActivatedRoute,
    private token: TokenStorageService
  ) {}

  openDialogLampiran() {
    this.dialog.open(DetailLampiranComponent);
  }

  openDialogInfoPenjual() {
    this.dialog.open(DetailInfoPenjualComponent);
  }

  openDialogInfoPenyelenggara() {
    this.dialog.open(DetailInfoPenyelenggaraComponent);
  }

  ngOnInit(): void {
    this.getDetailData();
  }

  getDetailData() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(GET_DETAIL_API + id).subscribe(
      (isi) => {
        // console.log(isi);
        this.detailDataAuctionObject = isi;
        this.createLogging(isi.id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createLogging(id: any) {
    this.logging.auctionObjectId = id;
    this.logging.userId = this.token.getUser().id;
    // console.log(this.logging);
    // create post
    this.http
      .post(
        'http://logging-service-website-lelang-bca-dev.apps.ocpdev.dti.co.id/create',
        this.logging,
        this.httpOptions_base
      )
      .subscribe(
        (isi) => {
          // console.log(isi);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
