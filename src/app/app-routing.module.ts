import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LotLelangDetailComponent } from './components/lot-lelang-detail/lot-lelang-detail.component';
import { LotLelangComponent } from './components/lot-lelang/lot-lelang.component';
import { LupaPasswordComponent } from './components/lupa-password/lupa-password.component';
import { ProfilComponent } from './components/index-profil/profil/profil.component';
import { RegisterComponent } from './components/register/register.component';
import { KonfirmasiIkutLelangComponent } from './components/konfirmasi-ikut-lelang/konfirmasi-ikut-lelang.component';
import { DetailStatusLelangComponent } from './components/detail-status-lelang/detail-status-lelang.component';
import { SyaratDanKetentuanComponent } from './components/syarat-dan-ketentuan/syarat-dan-ketentuan.component';
import { FaqComponent } from './components/faq/faq.component';
import { BiddingComponent } from './components/bidding/bidding.component';
import { PengumumanBiddingComponent } from './components/pengumuman-bidding/pengumuman-bidding.component';
import { KonfirmasiPembayaranJaminanComponent } from './components/konfirmasi-pembayaran-jaminan/konfirmasi-pembayaran-jaminan.component';
import { FormKprTambahComponent } from './components/form-kpr-tambah/form-kpr-tambah.component';
import { FormKprSuksesComponent } from './components/form-kpr-sukses/form-kpr-sukses.component';
import { MainProfilRiwayatKprComponent } from './components/index-profil/main-profil-riwayat-kpr/main-profil-riwayat-kpr.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {
      title: 'Home - audiBCA',
    },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home - audiBCA',
    },
  },
  {
    path: 'lot-lelang',
    component: LotLelangComponent,
    data: {
      title: 'Lot Lelang - audiBCA',
    },
  },
  {
    path: 'lot-lelang/detail/:id',
    component: LotLelangDetailComponent,
    data: {
      title: 'Lot Lelang Detail - audiBCA',
    },
  },
  {
    path: 'lot-lelang/konfirmasi-ikut-lelang/:id',
    component: KonfirmasiIkutLelangComponent,
    data: {
      title: 'Konfirmasi Ikut Lelang - audiBCA',
    },
  },
  {
    path: 'lot-lelang/bidding/:id',
    component: BiddingComponent,
    data: {
      title: 'Bidding - audiBCA',
    },
  },
  {
    path: 'lot-lelang/pengumuman-bidding/:id',
    component: PengumumanBiddingComponent,
    data: {
      title: 'Pengumuman Bidding - audiBCA',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login - audiBCA',
    },
  },
  {
    path: 'logout',
    redirectTo: '/login',
    pathMatch: 'full',
    data: {
      title: 'Login - audiBCA',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register - audiBCA',
    },
  },
  {
    path: 'lupa-password',
    component: LupaPasswordComponent,
    data: {
      title: 'Lupa Password - audiBCA',
    },
  },
  {
    path: 'status-lelang',
    component: ProfilComponent,
    data: {
      title: 'Status Lelang - audiBCA',
    },
  },
  {
    path: 'pelunasan-lelang',
    component: ProfilComponent,
    data: {
      title: 'Pelunasan Lelang - audiBCA',
    },
  },
  {
    path: 'status-lelang/detail/:id',
    component: DetailStatusLelangComponent,
    data: {
      title: 'Status Lelang Detail - audiBCA',
    },
  },
  {
    path: 'profil/ktp',
    component: ProfilComponent,
    data: {
      title: 'KTP - audiBCA',
    },
  },
  {
    path: 'profil/rekening-bank',
    component: ProfilComponent,
    data: {
      title: 'Rekening Bank - audiBCA',
    },
  },
  {
    path: 'profil/npwp',
    component: ProfilComponent,
    data: {
      title: 'NPWP - audiBCA',
    },
  },
  {
    path: 'profil/ganti-password',
    component: ProfilComponent,
    data: {
      title: 'Ganti Password - audiBCA',
    },
  },
  {
    path: 'profil/ganti-nama',
    component: ProfilComponent,
    data: {
      title: 'Ganti Profil - audiBCA',
    },
  },
  {
    path: 'profil/ganti-nomor-hp',
    component: ProfilComponent,
    data: {
      title: 'Ganti Nomor HP - audiBCA',
    },
  },
  {
    path: 'profil/riwayat-kpr',
    component: ProfilComponent,
  },
  {
    path: 'syarat-dan-ketentuan',
    component: SyaratDanKetentuanComponent,
    data: {
      title: 'Syarat Dan Ketentuan - audiBCA',
    },
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: {
      title: 'FAQ - audiBCA',
    },
  },
  {
    path: 'konfirmasi-pembayaran-jaminan',
    component: KonfirmasiPembayaranJaminanComponent,
    data: {
      title: 'Konfirmasi Pembayaran Jaminan - audiBCA',
    },
  },
  {
    path: 'form-kpr/tambah',
    component: FormKprTambahComponent,
    data: {
      title: 'Form KPR - audiBCA',
    },
  },
  {
    path: 'form-kpr/sukses',
    component: FormKprSuksesComponent,
    data: {
      title: 'Sukses Isi Form - audiBCA',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
