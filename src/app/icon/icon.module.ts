import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class IconModule {
  private path: string = '../../assets/img/icon';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
      .addSvgIcon('piechart', this.setPath(`${this.path}/piechart.svg`))
      .addSvgIcon('collection', this.setPath(`${this.path}/collection.svg`))
      .addSvgIcon('inbox', this.setPath(`${this.path}/inbox.svg`))
      .addSvgIcon('user', this.setPath(`${this.path}/user.svg`))
      .addSvgIcon('shopping-bag', this.setPath(`${this.path}/shopping-bag.svg`))
      .addSvgIcon('sign-in', this.setPath(`${this.path}/sign-in.svg`))
      .addSvgIcon('spreadsheet', this.setPath(`${this.path}/spreadsheet.svg`))
      .addSvgIcon(
        'rectangle-group',
        this.setPath(`${this.path}/rectangle-group.svg`)
      )
      .addSvgIcon('sidebar-open', this.setPath(`${this.path}/sidebar-open.svg`))
      .addSvgIcon('tsks-logo', this.setPath(`${this.path}/tsks.svg`))
      .addSvgIcon('chevron-left', this.setPath(`${this.path}/chevron-left.svg`))
      .addSvgIcon('elipse', this.setPath(`${this.path}/elipse.svg`))
      .addSvgIcon('plus-small', this.setPath(`${this.path}/plus-small.svg`))
      .addSvgIcon('folder', this.setPath(`${this.path}/folder.svg`));
  }

  private setPath(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
