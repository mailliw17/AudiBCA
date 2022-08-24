import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfoPenjualComponent } from './detail-info-penjual.component';

describe('DetailInfoPenjualComponent', () => {
  let component: DetailInfoPenjualComponent;
  let fixture: ComponentFixture<DetailInfoPenjualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInfoPenjualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailInfoPenjualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
