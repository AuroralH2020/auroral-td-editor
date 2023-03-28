import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from 'src/app/material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '@shared/shared.module'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HeaderComponent } from './components/header/header.component'
import { SideNavComponent } from './components/side-nav/side-nav.component'
import { OpenProfileComponent } from './components/header/open-profile/open-profile.component'
import { NotificationBellComponent } from './components/header/notification-bell/notification-bell.component'
import { NavButtonComponent } from './components/side-nav/nav-button/nav-button.component'
import { ComponentsLibraryComponent } from './sections/components-library/components-library.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ItemsComponent } from './sections/items/items.component';
import { NodePictogramComponent } from './components/node-pictogram/node-pictogram.component';
import { NodeItemsComponent } from './sections/items/components/node-items/node-items.component';
import { ForeignItemsComponent } from './sections/items/components/foreign-items/foreign-items.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    OpenProfileComponent,
    NotificationBellComponent,
    NavButtonComponent,
    ComponentsLibraryComponent,
    FooterComponent,
    ItemsComponent,
    NodePictogramComponent,
    NodeItemsComponent,
    ForeignItemsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class HomeModule {}
