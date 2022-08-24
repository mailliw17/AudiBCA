import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengumumanBiddingComponent } from './pengumuman-bidding.component';

describe('PengumumanBiddingComponent', () => {
  let component: PengumumanBiddingComponent;
  let fixture: ComponentFixture<PengumumanBiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengumumanBiddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengumumanBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
