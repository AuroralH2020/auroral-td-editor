import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { OpenProfileComponent } from './components/header/open-profile/open-profile.component';
import { NotificationBellComponent } from './components/header/notification-bell/notification-bell.component';
import { LogoComponent } from './components/side-nav/logo/logo.component';
import { NavButtonComponent } from './components/side-nav/nav-button/nav-button.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';
import { Item4Component } from './item4/item4.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    OpenProfileComponent,
    NotificationBellComponent,
    LogoComponent,
    NavButtonComponent,
    Item1Component,
    Item2Component,
    Item3Component,
    Item4Component,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class HomeModule { }
