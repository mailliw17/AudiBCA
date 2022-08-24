import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilPelunasanLelangComponent } from './main-profil-pelunasan-lelang.component';

describe('MainProfilPelunasanLelangComponent', () => {
  let component: MainProfilPelunasanLelangComponent;
  let fixture: ComponentFixture<MainProfilPelunasanLelangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilPelunasanLelangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilPelunasanLelangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
