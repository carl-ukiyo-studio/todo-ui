import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-header-item',
  templateUrl: './nav-header-item.component.html',
  styleUrls: ['./nav-header-item.component.css'],
})
export class NavHeaderItemComponent {
  @Input()
  name: string | undefined;

  @Input()
  path: string | undefined;

  @Input()
  icon: string | undefined;
}
