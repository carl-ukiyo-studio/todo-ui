import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSidebarItemComponent } from './nav-sidebar-item.component';

describe('NavSidebarItemComponent', () => {
  let component: NavSidebarItemComponent;
  let fixture: ComponentFixture<NavSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSidebarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
