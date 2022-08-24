import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotLelangComponent } from './lot-lelang.component';

describe('LotLelangComponent', () => {
  let component: LotLelangComponent;
  let fixture: ComponentFixture<LotLelangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotLelangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotLelangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
