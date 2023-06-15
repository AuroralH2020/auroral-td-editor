import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '@shared/shared.module'
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HomeNavComponent } from './components/home-nav/home-nav.component'
import { NavButtonComponent } from './components/home-nav/nav-button/nav-button.component'
import { ComponentsLibraryComponent } from './sections/components-library/components-library.component'
import { EuContribComponent } from './components/eu-contrib/eu-contrib.component'
import { ItemsComponent } from './sections/items/items.component'
import { SelectCommunityDialogComponent } from './components/select-community-dialog/select-community-dialog.component'
import { SelectPartnerDialogComponent } from './components/select-partner-dialog/select-partner-dialog.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavComponent,
    NavButtonComponent,
    ComponentsLibraryComponent,
    EuContribComponent,
    ItemsComponent,
    SelectCommunityDialogComponent,
    SelectPartnerDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
})
export class HomeModule {}