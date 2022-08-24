import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const GET_FAQ_API = 'http://10.1.137.50:8767/getAll';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqData: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllData();
    4;
  }

  getAllData() {
    this.http.get<any>(GET_FAQ_API).subscribe(
      (isi) => {
        this.faqData = isi.faqs;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
