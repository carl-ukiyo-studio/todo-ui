import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderItemComponent } from './nav-header-item.component';

describe('NavHeaderItemComponent', () => {
  let component: NavHeaderItemComponent;
  let fixture: ComponentFixture<NavHeaderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHeaderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
