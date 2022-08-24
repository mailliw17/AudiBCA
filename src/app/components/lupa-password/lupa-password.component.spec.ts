import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupaPasswordComponent } from './lupa-password.component';

describe('LupaPasswordComponent', () => {
  let component: LupaPasswordComponent;
  let fixture: ComponentFixture<LupaPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LupaPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LupaPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
