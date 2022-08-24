import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilKtpComponent } from './main-profil-ktp.component';

describe('MainProfilKtpComponent', () => {
  let component: MainProfilKtpComponent;
  let fixture: ComponentFixture<MainProfilKtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilKtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilKtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
