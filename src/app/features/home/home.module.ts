import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '@shared/shared.module'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { HeaderComponent } from './components/header/header.component'
import { SideNavComponent } from './components/side-nav/side-nav.component'
import { NavButtonComponent } from './components/side-nav/nav-button/nav-button.component'
import { ComponentsLibraryComponent } from './sections/components-library/components-library.component'
import { FooterComponent } from './components/footer/footer.component'
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module'
import { NodePictogramComponent } from './components/node-pictogram/node-pictogram.component'
import { ItemPictogramComponent } from './components/item-pictogram/item-pictogram.component'
import { ItemAccessLevelComponent } from './components/item-access-level/item-access-level.component'
import { SelectCommunityDialogComponent } from './components/select-community-dialog/select-community-dialog.component'
import { SelectPartnerDialogComponent } from './components/select-partner-dialog/select-partner-dialog.component'
import { OpenNodeProfileComponent } from './components/header/open-node-profile/open-node-profile.component'
import { NodeProfilePictogramComponent } from './components/header/node-profile-pictogram/node-profile-pictogram.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    NavButtonComponent,
    ComponentsLibraryComponent,
    FooterComponent,
    NodePictogramComponent,
    ItemPictogramComponent,
    ItemAccessLevelComponent,
    SelectCommunityDialogComponent,
    SelectPartnerDialogComponent,
    OpenNodeProfileComponent,
    NodeProfilePictogramComponent,
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
