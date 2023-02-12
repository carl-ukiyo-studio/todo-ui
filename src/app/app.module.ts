import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PlaceholderContentComponent } from './placeholder-content/placeholder-content.component';
import { NavHeaderComponent } from './navigation/nav-header/nav-header.component';
import { NavSidebarComponent } from './navigation/nav-sidebar/nav-sidebar.component';
import { NavProfileComponent } from './navigation/nav-profile/nav-profile.component';
import { NavSidebarItemComponent } from './navigation/nav-sidebar-item/nav-sidebar-item.component';
import { IconModule } from './icon/icon.module';
import { HttpClientModule } from '@angular/common/http';
import { NavHeaderItemComponent } from './navigation/nav-header-item/nav-header-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TodoListComponent,
    PlaceholderContentComponent,
    NavHeaderComponent,
    NavSidebarComponent,
    NavProfileComponent,
    NavSidebarItemComponent,
    NavHeaderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    IconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
