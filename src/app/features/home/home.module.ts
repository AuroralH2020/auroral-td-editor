import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { OpenProfileComponent } from './components/header/open-profile/open-profile.component';
import { NotificationBellComponent } from './components/header/notification-bell/notification-bell.component';
import { NavButtonComponent } from './components/side-nav/nav-button/nav-button.component';
import { AvatarPhotoComponent } from './components/header/open-profile/avatar-photo/avatar-photo.component';
import { ItemsComponent } from './sections/items/items.component';
import { CompaniesComponent } from './sections/companies/companies.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    OpenProfileComponent,
    NotificationBellComponent,
    NavButtonComponent,
    AvatarPhotoComponent,
    ItemsComponent,
    CompaniesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    SharedModule
  ],
  providers: [
  ]
})
export class HomeModule { }
