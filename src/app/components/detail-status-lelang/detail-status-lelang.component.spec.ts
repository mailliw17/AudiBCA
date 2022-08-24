import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStatusLelangComponent } from './detail-status-lelang.component';

describe('DetailStatusLelangComponent', () => {
  let component: DetailStatusLelangComponent;
  let fixture: ComponentFixture<DetailStatusLelangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStatusLelangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStatusLelangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
