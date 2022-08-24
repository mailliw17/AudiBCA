import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahKtpComponent } from './tambah-ktp.component';

describe('TambahKtpComponent', () => {
  let component: TambahKtpComponent;
  let fixture: ComponentFixture<TambahKtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahKtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahKtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
