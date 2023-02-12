import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-sidebar-item',
  templateUrl: './nav-sidebar-item.component.html',
  styleUrls: ['./nav-sidebar-item.component.css'],
})
export class NavSidebarItemComponent {
  @Input()
  name: string = '';

  @Input()
  path: string = '';

  @Input()
  icon: string | undefined;
}
