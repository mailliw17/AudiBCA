import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface NamaBank {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tambah-rekening-bank',
  templateUrl: './tambah-rekening-bank.component.html',
  styleUrls: ['./tambah-rekening-bank.component.css']
})


export class TambahRekeningBankComponent implements OnInit {

  pilihanNamaBank: NamaBank[] = [
    { value: 'BCA', viewValue: 'BCA' },
    { value: 'Blu', viewValue: 'Blu Digital' },
    { value: 'BCA Syariah', viewValue: 'BCA Syariah' },
  ];

  constructor(public dialogRef: MatDialogRef<TambahRekeningBankComponent>,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
