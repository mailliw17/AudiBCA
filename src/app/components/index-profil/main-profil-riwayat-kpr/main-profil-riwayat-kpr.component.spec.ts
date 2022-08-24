import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilRiwayatKprComponent } from './main-profil-riwayat-kpr.component';

describe('MainProfilRiwayatKprComponent', () => {
  let component: MainProfilRiwayatKprComponent;
  let fixture: ComponentFixture<MainProfilRiwayatKprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilRiwayatKprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilRiwayatKprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
