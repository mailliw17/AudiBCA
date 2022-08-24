import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfirmasiIkutLelangComponent } from './konfirmasi-ikut-lelang.component';

describe('KonfirmasiIkutLelangComponent', () => {
  let component: KonfirmasiIkutLelangComponent;
  let fixture: ComponentFixture<KonfirmasiIkutLelangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonfirmasiIkutLelangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonfirmasiIkutLelangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
