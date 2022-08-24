import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfilRekeningBankComponent } from './main-profil-rekening-bank.component';

describe('MainProfilRekeningBankComponent', () => {
  let component: MainProfilRekeningBankComponent;
  let fixture: ComponentFixture<MainProfilRekeningBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfilRekeningBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfilRekeningBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
