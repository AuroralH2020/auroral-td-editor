import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HeaderComponent } from './components/header/header.component'
import { SideNavComponent } from './components/side-nav/side-nav.component'
import { OpenProfileComponent } from './components/header/open-profile/open-profile.component'
import { NotificationBellComponent } from './components/header/notification-bell/notification-bell.component'
import { NavButtonComponent } from './components/side-nav/nav-button/nav-button.component'
import { ItemsComponent } from './sections/items/items.component'
import { CompaniesComponent } from './sections/companies/companies.component'
import { ItemDetailComponent } from './sections/items/item-detail/item-detail.component'
import { ItemSubscribersComponent } from './sections/items/components/item-subscribers/item-subscribers.component'
import { ItemOnlineComponent } from './sections/items/components/item-online/item-online.component'
import { ItemOwnerComponent } from './sections/items/components/item-owner/item-owner.component'
import { ItemInteractionComponent } from './sections/items/components/item-monitor/item-monitor.component'
import { ItemSubscriptionsComponent } from './sections/items/components/item-subscriptions/item-subscriptions.component'
import { ItemPictogramComponent } from './sections/items/components/item-pictogram/item-pictogram.component'
import { ItemManageSubscriptionsComponent } from './sections/items/item-manage-subscriptions/item-manage-subscriptions.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    OpenProfileComponent,
    NotificationBellComponent,
    NavButtonComponent,
    ItemsComponent,
    CompaniesComponent,
    ItemDetailComponent,
    ItemSubscribersComponent,
    ItemOnlineComponent,
    ItemOwnerComponent,
    ItemInteractionComponent,
    ItemSubscriptionsComponent,
    ItemPictogramComponent,
    ItemManageSubscriptionsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class HomeModule {}
