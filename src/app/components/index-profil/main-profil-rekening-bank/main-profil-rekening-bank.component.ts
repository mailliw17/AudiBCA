import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RekeningService } from 'src/app/_services/rekening.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TambahRekeningBankComponent } from '../../dialog/tambah-rekening-bank/tambah-rekening-bank.component';
import { Rekening } from './rekening';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-profil-rekening-bank',
  templateUrl: './main-profil-rekening-bank.component.html',
  styleUrls: ['./main-profil-rekening-bank.component.css'],
})
export class MainProfilRekeningBankComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  rekeningData!: Rekening[];
  dtTrigger: Subject<any> = new Subject<any>();
  rekeningDataForm!: FormGroup;
  isEdit: boolean = false;
  index: number = 0;
  isExist: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private router: Router,
    private rekening: RekeningService
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      paging: false,
    };

    this.rekening.getRekeningData(this.token.getUser().id).subscribe(
      (isi) => {
        this.rekeningData = isi;
        if (isi) {
          this.isExist = true;
        }
        // else {
        //   this.isExist = false;
        // }
        this.dtTrigger.next(this.rekeningData);
      },
      (err) => {
        this.isExist = false;
        console.log(err);
      }
    );

    this.rekeningDataForm = this.formBuilder.group({
      bank: [''],
      accountNo: [''],
      name: [''],
    });
  }

  openAddModal(): void {
    this.isEdit = false;
    this.rekeningDataForm.reset();
  }

  openEditModal(i: any): void {
    this.isEdit = true;
    this.index = i;
    this.rekeningDataForm.patchValue({
      bank: this.rekeningData[i].bank,
      accountNo: this.rekeningData[i].accountNo,
      name: this.rekeningData[i].name,
    });
  }

  deleteRekening(i: any): void {
    this.rekening.deleteRekeningData(this.rekeningData[i].id).subscribe(
      (isi) => {
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addRekening(): void {
    if (this.rekeningDataForm.get('bank')!.value == 'BCA') {
      this.rekening
        .getRekeningDataFromIds(this.rekeningDataForm.get('accountNo')!.value)
        .subscribe(
          (isi) => {
            if (isi == null) {
              Swal.fire({
                title: 'Gagal',
                text: 'Rekening tidak ditemukan',
                icon: 'error',
              });
            } else {
              this.rekening
                .createRekeningData(this.rekeningDataForm.value)
                .subscribe(
                  (isi) => {
                    window.location.reload();
                  },
                  (err) => {
                    console.log(err);
                  }
                );
            }
          },
          (err) => {
            Swal.fire({
              title: 'Gagal',
              text: 'Rekening tidak ditemukan',
              icon: 'error',
            });
            console.log(err);
          }
        );
    } else {
      this.rekening.createRekeningData(this.rekeningDataForm.value).subscribe(
        (isi) => {
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  updateRekening(): void {
    this.rekening
      .updateRekeningData(
        this.rekeningData[this.index].id,
        this.rekeningDataForm.value
      )
      .subscribe(
        (isi) => {
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
