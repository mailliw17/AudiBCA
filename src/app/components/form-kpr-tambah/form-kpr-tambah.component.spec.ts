import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKprTambahComponent } from './form-kpr-tambah.component';

describe('FormKprTambahComponent', () => {
  let component: FormKprTambahComponent;
  let fixture: ComponentFixture<FormKprTambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKprTambahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormKprTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
