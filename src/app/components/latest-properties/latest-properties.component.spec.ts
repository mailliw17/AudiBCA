import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPropertiesComponent } from './latest-properties.component';

describe('LatestPropertiesComponent', () => {
  let component: LatestPropertiesComponent;
  let fixture: ComponentFixture<LatestPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
