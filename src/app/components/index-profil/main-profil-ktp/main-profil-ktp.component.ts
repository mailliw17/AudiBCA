import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { KtpService } from '../../../_services/ktp.service';
import { Ktp } from './ktp';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Province } from 'src/app/_class/province';
import { City } from '../../../_class/city';
import { AddressService } from '../../../_services/address.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-profil-ktp',
  templateUrl: './main-profil-ktp.component.html',
  styleUrls: ['./main-profil-ktp.component.css'],
})
export class MainProfilKtpComponent implements OnInit {
  ktpData!: Ktp;
  ktpForm!: FormGroup;
  fileKtpForm!: FormGroup;
  provinceData: Province[] = [];
  cityData: City[] = [];
  isExist: boolean = false;
  imageSrc!: string;

  constructor(
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private router: Router,
    private ktp: KtpService,
    private address: AddressService
  ) {
    this.fileKtpForm = this.formBuilder.group({
      img: [null],
    });
  }

  ngOnInit(): void {
    //get data from ktp service
    this.ktp.getKtpData(this.token.getUser().id).subscribe(
      (isi) => {
        this.ktpData = isi;
        this.isExist = true;
      },
      (err) => {
        console.log(err);
      }
    );

    //get data from province service
    this.address.getProvince().subscribe(
      (isi) => {
        this.provinceData = isi;
      },
      (err) => {
        console.log(err);
      }
    );

    // form ktp
    this.ktpForm = this.formBuilder.group({
      namaLengkap: [''],
      birthPlace: [''],
      birthDate: [''],
      address: [''],
      city: [''],
      gender: [''],
      isForever: [''],
      job: [''],
      ktpNo: [''],
      province: [''],
      expireDate: ['']
    });
  }

  // add ktp
  addKtp(): void {
    console.log(this.ktpForm.value);
    this.ktp.createKtpData(this.ktpForm.value).subscribe(
      (isi) => {
        console.log(isi);
        window.location.reload();
        // get modal-form and close it
      }, (err) => {
        console.log(err);
      }
    );
  }

  // add ktp
  updateKtp(): void {
    this.ktp.updateKtpData(this.ktpData.id, this.ktpForm.value).subscribe(
      (isi) => {
        console.log(isi);
        window.location.reload();
        // get modal-form and close it
      }, (err) => {
        console.log(err);
      }
    );
  }

  deleteKtp(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.ktp.deleteKtpData(this.ktpData.id).subscribe(
          (isi) => {
            console.log(isi);
            window.location.reload();
            // get modal-form and close it
          }
        );
      } else {
        Swal.fire(
          'Cancelled',
          'Your KTP file is safe :)',
          'error'
        )
      }
    }
    );
  }

  addKtpFile(): void {
    this.ktp.updateFileKtp(this.ktpData.id, this.fileKtpForm.get('img')!.value).subscribe(
      (isi) => {
        console.log(isi);
        window.location.reload();
        // get modal-form and close it
      }, (err) => {
        console.log(err);
      }
    );
  }

  provinceChanged() {
    this.address.getCity(this.ktpForm.value.province).subscribe(
      (isi) => {
        this.cityData = isi;
      }
    );
  }

  isForeverChanged() {
    if (this.ktpForm.value.isForever) {
      this.ktpForm.get('expireDate')!.reset();
      this.ktpForm.get('expireDate')!.disable();
    } else {
      this.ktpForm.get('expireDate')!.enable();
    }
  }

  onFileChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const file = event.target.files && event.target.files[0];

      this.fileKtpForm.patchValue({
        img: file
      });

      this.fileKtpForm.get('img')!.updateValueAndValidity()
      reader.readAsDataURL(file);
      console.log(reader.result as string);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      }
    }
  }

  openEditModal(): void {
    this.ktpForm.patchValue({
      ktpNo: this.ktpData.ktpNo,
      namaLengkap: this.ktpData.namaLengkap,
      birthPlace: this.ktpData.birthPlace,
      birthDate: this.ktpData.birthDate,
      address: this.ktpData.address,
      city: this.ktpData.city,
      gender: this.ktpData.gender,
      isForever: this.ktpData.isForever,
      job: this.ktpData.job,
      province: this.ktpData.province,
      expireDate: this.ktpData.expireDate
    });
    if (this.ktpForm.value.isForever) {
      this.ktpForm.get('expireDate')!.reset();
      this.ktpForm.get('expireDate')!.disable();
    } else {
      this.ktpForm.get('expireDate')!.enable();
    }
    this.address.getCity(this.ktpForm.value.province).subscribe(
      (isi) => {
        this.cityData = isi;
      }
    );
  }

}
