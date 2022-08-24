import { Component, OnInit } from '@angular/core';
import { NpwpService } from '../../../_services/npwp.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { Npwp } from './npwp';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-profil-npwp',
  templateUrl: './main-profil-npwp.component.html',
  styleUrls: ['./main-profil-npwp.component.css']
})
export class MainProfilNpwpComponent implements OnInit {
  npwpData!: Npwp;
  npwpForm!: FormGroup;
  isExist: boolean = false;
  imageSrc!: string;
  fileNpwpForm!: FormGroup;
  npwpDataForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private token: TokenStorageService,
    private router: Router,
    private npwp: NpwpService) {
      this.fileNpwpForm = this.formBuilder.group({
        npwpImage: [null],
      });
    }

  ngOnInit(): void {
    //get data from npwp service
    this.npwp.getNpwpData(this.token.getUser().id).subscribe(
      (isi) => {
        this.npwpData = isi;
        this.isExist = true;
      },
      (err) => {
        console.log(err);
      }
    );

    this.npwpForm = this.formBuilder.group({
      name: [''],
      npwpAddress: [''],
      npwpNo: [''],
      npwpImage: [null]
    });
  }

  addNpwp(): void {
    this.npwpDataForm = this.formBuilder.group({
      name: this.npwpForm.get('name')?.value,
      npwpAddress: this.npwpForm.get('npwpAddress')?.value,
      npwpNo: this.npwpForm.get('npwpNo')?.value
    });
    this.npwp.createNpwpData(this.npwpDataForm.value, this.npwpForm.get('npwpImage')?.value).subscribe(
      (isi) => {
        console.log(isi);
        window.location.reload();
      }, (err) => {
        console.log(err);
      }
    );
  }

  updateNpwp(): void {
    this.npwpDataForm = this.formBuilder.group({
      name: this.npwpForm.get('name')?.value,
      npwpAddress: this.npwpForm.get('npwpAddress')?.value,
      npwpNo: this.npwpForm.get('npwpNo')?.value
    });
    this.npwp.updateNpwpData(this.npwpData.id, this.npwpDataForm.value, this.npwpForm.get('npwpImage')?.value).subscribe(
      (isi) => {
        console.log(isi);
        window.location.reload();
      }, (err) => {
        console.log(err);
      }
    );
  }

  updateNpwpImage(): void {
    this.npwp.updateNpwpImage(this.npwpData.id, this.npwpForm.get('npwpImage')?.value).subscribe(
      (isi) => {
        console.log(isi);
        window.location.reload();
      }, (err) => {
        console.log(err);
      }
    );
  }

  deleteNpwp(): void {
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
        this.npwp.deleteNpwpData(this.npwpData.id).subscribe(
          (isi) => {
            console.log(isi);
            window.location.reload();
            // get modal-form and close it
          }
        );
      } else {
        Swal.fire(
          'Cancelled',
          'Your NPWP file is safe :)',
          'error'
        )
      }
    }
    );
  }


  onFileChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const file = event.target.files && event.target.files[0];

      this.npwpForm.patchValue({
        npwpImage: file
      });

      this.npwpForm.get('npwpImage')!.updateValueAndValidity()
      reader.readAsDataURL(file);
      console.log(reader.result as string);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      }
    }
  }

  openEditModal(): void {
    this.npwpForm.patchValue({
      name: this.npwpData.name,
      npwpAddress: this.npwpData.npwpAddress,
      npwpNo: this.npwpData.npwpNo,
      npwpImage: this.npwpData.path
    });
    this.imageSrc = this.npwpData.path;
  }
}
