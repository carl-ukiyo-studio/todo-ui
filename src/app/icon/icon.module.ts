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
    this.matIconRegistry.addSvgIcon(
      'piechart',
      this.setPath(`${this.path}/piechart.svg`)
    );
  }

  private setPath(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
