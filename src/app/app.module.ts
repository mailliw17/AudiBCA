import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { MatStepperModule } from '@angular/material/stepper';
import { IconModule } from '@coreui/icons-angular';
import { AlertModule, CarouselModule } from '@coreui/angular';
import { BadgeModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { LatestPropertiesComponent } from './components/latest-properties/latest-properties.component';
import { FooterComponent } from './components/footer/footer.component';
import { LotLelangComponent } from './components/lot-lelang/lot-lelang.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { LotLelangDetailComponent } from './components/lot-lelang-detail/lot-lelang-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LupaPasswordComponent } from './components/lupa-password/lupa-password.component';
import { ProfilComponent } from './components/index-profil/profil/profil.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidebarProfilComponent } from './components/index-profil/sidebar-profil/sidebar-profil.component';
import { MatCardModule } from '@angular/material/card';
import { MainProfilStatusLelangComponent } from './components/index-profil/main-profil-status-lelang/main-profil-status-lelang.component';
import { MainProfilKtpComponent } from './components/index-profil/main-profil-ktp/main-profil-ktp.component';
import { MatButtonModule } from '@angular/material/button';
import { MainProfilRekeningBankComponent } from './components/index-profil/main-profil-rekening-bank/main-profil-rekening-bank.component';
import { MainProfilNpwpComponent } from './components/index-profil/main-profil-npwp/main-profil-npwp.component';
import { MainProfilGantiPasswordComponent } from './components/index-profil/main-profil-ganti-password/main-profil-ganti-password.component';
import { MainProfilGantiNamaComponent } from './components/index-profil/main-profil-ganti-nama/main-profil-ganti-nama.component';
import { MainProfilGantiNomorHpComponent } from './components/index-profil/main-profil-ganti-nomor-hp/main-profil-ganti-nomor-hp.component';
import { TambahKtpComponent } from './components/dialog/tambah-ktp/tambah-ktp.component';
import { TambahRekeningBankComponent } from './components/dialog/tambah-rekening-bank/tambah-rekening-bank.component';
import { TambahNpwpComponent } from './components/dialog/tambah-npwp/tambah-npwp.component';
import { KonfirmasiIkutLelangComponent } from './components/konfirmasi-ikut-lelang/konfirmasi-ikut-lelang.component';
import { DetailStatusLelangComponent } from './components/detail-status-lelang/detail-status-lelang.component';
import { DetailLampiranComponent } from './components/dialog/detail-lampiran/detail-lampiran.component';
import { DetailInfoPenjualComponent } from './components/dialog/detail-info-penjual/detail-info-penjual.component';
import { DetailInfoPenyelenggaraComponent } from './components/dialog/detail-info-penyelenggara/detail-info-penyelenggara.component';
import { SyaratDanKetentuanComponent } from './components/syarat-dan-ketentuan/syarat-dan-ketentuan.component';
import { FaqComponent } from './components/faq/faq.component';
import { BiddingComponent } from './components/bidding/bidding.component';
import { PengumumanBiddingComponent } from './components/pengumuman-bidding/pengumuman-bidding.component';
import { CarouselDetailComponent } from './components/carousel-detail/carousel-detail.component';
import { DataTablesModule } from 'angular-datatables';
import { KonfirmasiPembayaranJaminanComponent } from './components/konfirmasi-pembayaran-jaminan/konfirmasi-pembayaran-jaminan.component';
import { MainProfilPelunasanLelangComponent } from './components/index-profil/main-profil-pelunasan-lelang/main-profil-pelunasan-lelang.component';
import { FormKprTambahComponent } from './components/form-kpr-tambah/form-kpr-tambah.component';
import { FormKprSuksesComponent } from './components/form-kpr-sukses/form-kpr-sukses.component';
import { MainProfilRiwayatKprComponent } from './components/index-profil/main-profil-riwayat-kpr/main-profil-riwayat-kpr.component';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    OurServicesComponent,
    LatestPropertiesComponent,
    FooterComponent,
    LotLelangComponent,
    HomeComponent,
    PropertyDetailComponent,
    LotLelangDetailComponent,
    LoginComponent,
    RegisterComponent,
    LupaPasswordComponent,
    ProfilComponent,
    SidebarProfilComponent,
    MainProfilStatusLelangComponent,
    MainProfilKtpComponent,
    MainProfilRekeningBankComponent,
    MainProfilNpwpComponent,
    MainProfilGantiPasswordComponent,
    MainProfilGantiNamaComponent,
    MainProfilGantiNomorHpComponent,
    TambahKtpComponent,
    TambahRekeningBankComponent,
    TambahNpwpComponent,
    KonfirmasiIkutLelangComponent,
    DetailStatusLelangComponent,
    DetailLampiranComponent,
    DetailInfoPenjualComponent,
    DetailInfoPenyelenggaraComponent,
    SyaratDanKetentuanComponent,
    FaqComponent,
    BiddingComponent,
    PengumumanBiddingComponent,
    CarouselDetailComponent,
    KonfirmasiPembayaranJaminanComponent,
    MainProfilPelunasanLelangComponent,
    FormKprTambahComponent,
    FormKprSuksesComponent,
    MainProfilRiwayatKprComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatBadgeModule,
    MatButtonToggleModule,
    CarouselModule,
    IconModule,
    BadgeModule,
    HttpClientModule,
    DataTablesModule,
    AlertModule,
    MatStepperModule,
    NgxCurrencyModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
