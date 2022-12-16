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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatBadgeModule } from '@angular/material/badge'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonModule } from '@angular/material/button'

import { SharedModule } from '@shared/shared.module'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HeaderComponent } from './components/header/header.component'
import { SideNavComponent } from './components/side-nav/side-nav.component'
import { OpenProfileComponent } from './components/header/open-profile/open-profile.component'
import { NotificationBellComponent } from './components/header/notification-bell/notification-bell.component'
import { NavButtonComponent } from './components/side-nav/nav-button/nav-button.component'
import { ItemsComponent } from './sections/items/items.component'
import { ItemDetailComponent } from './sections/items/item-detail/item-detail.component'
import { ItemSubscribersComponent } from './sections/items/components/item-subscribers/item-subscribers.component'
import { ItemOnlineComponent } from './sections/items/components/item-online/item-online.component'
import { ItemOwnerComponent } from './sections/items/components/item-owner/item-owner.component'
import { ItemInteractionComponent } from './sections/items/components/item-monitor/item-monitor.component'
import { ItemSubscriptionsComponent } from './sections/items/item-detail/components/item-subscriptions/item-subscriptions.component'
import { ItemManageSubscriptionsComponent } from './sections/items/item-manage-subscriptions/item-manage-subscriptions.component'
import { ItemMonitorsComponent } from './sections/items/item-detail/components/item-monitors/item-monitors.component'
import { ItemMonitorsDialogComponent } from './sections/items/item-detail/components/item-monitors/item-monitors-dialog/item-monitors-dialog.component'
import { ItemSubcribersBadgeComponent } from './sections/items/components/item-subcribers-badge/item-subcribers-badge.component'
import { ItemsTableComponent } from './sections/items/components/items-table/items-table.component'
import { DataServicesComponent } from './sections/data-services/data-services.component'
import { DataServiceDetailComponent } from './sections/data-services/data-service-detail/data-service-detail.component'
import { NodesComponent } from './sections/nodes/nodes.component'
import { NodesDetailComponent } from './sections/nodes/nodes-detail/nodes-detail.component'
import { DataServiceCreateComponent } from './sections/data-services/data-service-create/data-service-create.component'
import { NodeRegisterComponent } from './sections/nodes/node-register/node-register.component';
import { NodeUnregisterComponent } from './sections/nodes/node-unregister/node-unregister.component';
import { DataServiceDeleteComponent } from './sections/data-services/data-service-delete/data-service-delete.component';
import { ReRunDiscoveryComponent } from './components/re-run-discovery/re-run-discovery.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    OpenProfileComponent,
    NotificationBellComponent,
    NavButtonComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemSubscribersComponent,
    ItemOnlineComponent,
    ItemOwnerComponent,
    ItemInteractionComponent,
    ItemSubscriptionsComponent,
    ItemManageSubscriptionsComponent,
    ItemMonitorsComponent,
    ItemMonitorsDialogComponent,
    ItemSubcribersBadgeComponent,
    ItemsTableComponent,
    DataServicesComponent,
    DataServiceDetailComponent,
    NodesComponent,
    NodesDetailComponent,
    DataServiceCreateComponent,
    NodeRegisterComponent,
    NodeUnregisterComponent,
    DataServiceDeleteComponent,
    ReRunDiscoveryComponent,
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
    ReactiveFormsModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  providers: [],
})
export class HomeModule {}
