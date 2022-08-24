import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilStatusLelangComponent } from './main-profil-status-lelang.component';

describe('MainProfilStatusLelangComponent', () => {
  let component: MainProfilStatusLelangComponent;
  let fixture: ComponentFixture<MainProfilStatusLelangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilStatusLelangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilStatusLelangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
