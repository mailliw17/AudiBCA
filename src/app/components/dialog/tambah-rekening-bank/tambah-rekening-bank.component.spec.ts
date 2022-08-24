import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahRekeningBankComponent } from './tambah-rekening-bank.component';

describe('TambahRekeningBankComponent', () => {
  let component: TambahRekeningBankComponent;
  let fixture: ComponentFixture<TambahRekeningBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahRekeningBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahRekeningBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
