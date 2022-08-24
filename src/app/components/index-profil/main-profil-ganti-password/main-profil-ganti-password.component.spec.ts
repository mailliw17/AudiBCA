import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilGantiPasswordComponent } from './main-profil-ganti-password.component';

describe('MainProfilGantiPasswordComponent', () => {
  let component: MainProfilGantiPasswordComponent;
  let fixture: ComponentFixture<MainProfilGantiPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilGantiPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilGantiPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
