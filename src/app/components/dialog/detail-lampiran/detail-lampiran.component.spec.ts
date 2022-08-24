import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLampiranComponent } from './detail-lampiran.component';

describe('DetailLampiranComponent', () => {
  let component: DetailLampiranComponent;
  let fixture: ComponentFixture<DetailLampiranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLampiranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLampiranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
