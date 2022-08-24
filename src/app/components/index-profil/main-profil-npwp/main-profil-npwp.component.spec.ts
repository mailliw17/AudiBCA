import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilNpwpComponent } from './main-profil-npwp.component';

describe('MainProfilNpwpComponent', () => {
  let component: MainProfilNpwpComponent;
  let fixture: ComponentFixture<MainProfilNpwpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilNpwpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilNpwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
