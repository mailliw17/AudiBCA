import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfoPenyelenggaraComponent } from './detail-info-penyelenggara.component';

describe('DetailInfoPenyelenggaraComponent', () => {
  let component: DetailInfoPenyelenggaraComponent;
  let fixture: ComponentFixture<DetailInfoPenyelenggaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInfoPenyelenggaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailInfoPenyelenggaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
