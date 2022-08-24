import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahNpwpComponent } from './tambah-npwp.component';

describe('TambahNpwpComponent', () => {
  let component: TambahNpwpComponent;
  let fixture: ComponentFixture<TambahNpwpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahNpwpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahNpwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
