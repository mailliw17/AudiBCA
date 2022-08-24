import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilGantiNamaComponent } from './main-profil-ganti-nama.component';

describe('MainProfilGantiNamaComponent', () => {
  let component: MainProfilGantiNamaComponent;
  let fixture: ComponentFixture<MainProfilGantiNamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilGantiNamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilGantiNamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
