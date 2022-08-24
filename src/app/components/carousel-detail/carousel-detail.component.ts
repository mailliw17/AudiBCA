import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

const GET_DETAIL_API = 'http://10.1.137.50:8766/get/';

@Component({
  selector: 'app-carousel-detail',
  templateUrl: './carousel-detail.component.html',
  styleUrls: ['./carousel-detail.component.css'],
})
export class CarouselDetailComponent implements OnInit {
  detailDataAuctionObject: any = {};
  //slides: any[] = [];
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDetailData();
  }

  getDetailData() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.http.get<any>(GET_DETAIL_API + id).subscribe(
      (isi) => {
        this.slides[0] = {
          src: isi.imageURL1,
        };
        this.slides[1] = {
          src: isi.imageURL2,
        };
        this.slides[2] = {
          src: isi.imageURL3,
        };
        this.slides[3] = {
          src: isi.imageURL4,
        };
        this.slides[4] = {
          src: isi.imageURL5,
        };
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
