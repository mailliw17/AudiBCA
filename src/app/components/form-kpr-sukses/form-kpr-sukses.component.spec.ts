import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKprSuksesComponent } from './form-kpr-sukses.component';

describe('FormKprSuksesComponent', () => {
  let component: FormKprSuksesComponent;
  let fixture: ComponentFixture<FormKprSuksesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormKprSuksesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormKprSuksesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
