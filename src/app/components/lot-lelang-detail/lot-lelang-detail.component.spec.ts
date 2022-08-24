import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotLelangDetailComponent } from './lot-lelang-detail.component';

describe('LotLelangDetailComponent', () => {
  let component: LotLelangDetailComponent;
  let fixture: ComponentFixture<LotLelangDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotLelangDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotLelangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
