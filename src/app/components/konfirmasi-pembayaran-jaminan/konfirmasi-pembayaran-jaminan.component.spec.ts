import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfirmasiPembayaranJaminanComponent } from './konfirmasi-pembayaran-jaminan.component';

describe('KonfirmasiPembayaranJaminanComponent', () => {
  let component: KonfirmasiPembayaranJaminanComponent;
  let fixture: ComponentFixture<KonfirmasiPembayaranJaminanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonfirmasiPembayaranJaminanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonfirmasiPembayaranJaminanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
