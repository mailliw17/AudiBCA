import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

interface JenisKelamin {
  value: string;
  viewValue: string;
}

interface Pekerjaan {
  value: string;
  viewValue: string;
}

interface Provinsi {
  value: string;
  viewValue: string;
}

interface Kota {
  value: string;
  viewValue: string;
}

interface KantorPemerikaKtp {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-tambah-ktp',
  templateUrl: './tambah-ktp.component.html',
  styleUrls: ['./tambah-ktp.component.css']
})
export class TambahKtpComponent implements OnInit {
  pilihanJeniskelamin: JenisKelamin[] = [
    { value: 'L', viewValue: 'Laki-laki' },
    { value: 'P', viewValue: 'Perempuan' },
  ];

  pilihanPekerjaan: Pekerjaan[] = [
    { value: 'Belum/Tidak Bekerja', viewValue: 'Belum/Tidak Bekerja' },
    { value: 'Mengurus Rumah Tangga', viewValue: 'Mengurus Rumah Tangga' },
    { value: 'Pelajar/Mahasiswa', viewValue: 'Pelajar/Mahasiswa' },
    { value: 'Pegawai Negeri Sipil', viewValue: 'Pegawai Negeri Sipil' },
    { value: 'Karyawan Swasta', viewValue: 'Karyawan Swasta' },
    { value: 'Wirausaha', viewValue: 'Wirausaha' },
  ];

  pilihanProvinsi: Provinsi[] = [
    { value: 'DKI Jakarta', viewValue: 'DKI Jakarta' },
    { value: 'Jawa Barat', viewValue: 'Jawa Barat' },
    { value: 'Jawa Tengah', viewValue: 'Jawa Tengah' },
  ];

  pilihanKota: Kota[] = [
    { value: 'Jakarta Barat', viewValue: 'Jakarta Barat' },
    { value: 'Jakarta Pusat', viewValue: 'Jakarta Pusat' },
    { value: 'Semarang', viewValue: 'Semarang' },
    { value: 'Solo', viewValue: 'Solo' },
  ];

  pilihanKantorPemeriksaKtp: KantorPemerikaKtp[] = [
    { value: 'KPKNL Ambon', viewValue: 'KPKNL Ambon' },
    { value: 'KPKNL Banda Aceh', viewValue: 'KPKNL Banda Aceh' },
    { value: 'KPKNL Bandung', viewValue: 'KPKNL Bandung' },
  ];

  disableSelect = new FormControl(false);

  constructor(
    public dialogRef: MatDialogRef<TambahKtpComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
