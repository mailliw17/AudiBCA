import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

const GET_DETAIL_API = 'http://10.1.137.50:8766/get/';

@Component({
  selector: 'app-detail-lampiran',
  templateUrl: './detail-lampiran.component.html',
  styleUrls: ['./detail-lampiran.component.css'],
})
export class DetailLampiranComponent implements OnInit {
  detailDataAuctionObject: any;

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDetailData();
    // console.log('aku terbuka');
  }

  getDetailData() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(GET_DETAIL_API + id).subscribe(
      (isi) => {
        console.log(isi);
        this.detailDataAuctionObject = isi;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
