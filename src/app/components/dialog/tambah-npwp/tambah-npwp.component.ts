import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

interface KantorPemerikaKtp {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tambah-npwp',
  templateUrl: './tambah-npwp.component.html',
  styleUrls: ['./tambah-npwp.component.css']
})
export class TambahNpwpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TambahNpwpComponent>,) { }

  pilihanKantorPemeriksaKtp: KantorPemerikaKtp[] = [
    { value: 'KPKNL Ambon', viewValue: 'KPKNL Ambon' },
    { value: 'KPKNL Banda Aceh', viewValue: 'KPKNL Banda Aceh' },
    { value: 'KPKNL Bandung', viewValue: 'KPKNL Bandung' },
  ];

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
