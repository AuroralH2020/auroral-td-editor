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
import { NodeItemsComponent } from './sections/items/item-types/node-items/node-items.component';
import { ForeignItemsComponent } from './sections/items/item-types/foreign-items/foreign-items.component';
import { ItemPictogramComponent } from './components/item-pictogram/item-pictogram.component';
import { ItemAccessLevelComponent } from './components/item-access-level/item-access-level.component';
import { NodeItemDetailComponent } from './sections/items/item-types/node-items/node-item-detail/node-item-detail.component';
import { ItemIconComponent } from './sections/items/components/item-icon/item-icon.component';
import { FromCommunitiesComponent } from './sections/items/item-types/foreign-items/from-communities/from-communities.component';
import { FromPartnershipsComponent } from './sections/items/item-types/foreign-items/from-partnerships/from-partnerships.component';

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
    ItemPictogramComponent,
    ItemAccessLevelComponent,
    NodeItemDetailComponent,
    ItemIconComponent,
    FromCommunitiesComponent,
    FromPartnershipsComponent,
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
