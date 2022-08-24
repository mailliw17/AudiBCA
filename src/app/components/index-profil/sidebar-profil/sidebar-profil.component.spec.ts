import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfilComponent } from './sidebar-profil.component';

describe('SidebarProfilComponent', () => {
  let component: SidebarProfilComponent;
  let fixture: ComponentFixture<SidebarProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
