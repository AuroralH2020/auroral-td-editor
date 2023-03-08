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
import { MenuItemComponent } from './sections/menu-item/menu-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    OpenProfileComponent,
    NotificationBellComponent,
    NavButtonComponent,
    MenuItemComponent,
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
