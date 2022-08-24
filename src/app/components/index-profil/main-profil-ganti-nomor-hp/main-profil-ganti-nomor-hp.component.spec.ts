import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilGantiNomorHpComponent } from './main-profil-ganti-nomor-hp.component';

describe('MainProfilGantiNomorHpComponent', () => {
  let component: MainProfilGantiNomorHpComponent;
  let fixture: ComponentFixture<MainProfilGantiNomorHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilGantiNomorHpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilGantiNomorHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
