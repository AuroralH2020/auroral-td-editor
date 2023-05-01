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
import { ItemsComponent } from './sections/items/items.component'
import { NodePictogramComponent } from './components/node-pictogram/node-pictogram.component'
import { NodeItemsComponent } from './sections/items/node-items/node-items.component'
import { ForeignItemsComponent } from './sections/items/foreign-items/foreign-items.component'
import { ItemPictogramComponent } from './components/item-pictogram/item-pictogram.component'
import { ItemAccessLevelComponent } from './components/item-access-level/item-access-level.component'
import { FromCommunitiesComponent } from './sections/items/foreign-items/from-communities/from-communities.component'
import { FromPartnershipsComponent } from './sections/items/foreign-items/from-partnerships/from-partnerships.component'
import { SelectCommunityDialogComponent } from './sections/items/foreign-items/from-communities/select-community-dialog/select-community-dialog.component'
import { SelectPartnerDialogComponent } from './sections/items/foreign-items/from-partnerships/select-partner-dialog/select-partner-dialog.component'
import { OpenNodeProfileComponent } from './components/header/open-node-profile/open-node-profile.component'
import { NodeProfilePictogramComponent } from './components/header/node-profile-pictogram/node-profile-pictogram.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QueryComponent } from './sections/query/query.component';
import { NodeQueryComponent } from './sections/query/node-query/node-query.component';
import { CommunityQueryComponent } from './sections/query/foreign-query/community-query/community-query.component';
import { PartnershipQueryComponent } from './sections/query/foreign-query/partnership-query/partnership-query.component';
import { ForeignQueryComponent } from './sections/query/foreign-query/foreign-query.component';
import { MyOrgQueryComponent } from './sections/query/my-org-query/my-org-query.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    NavButtonComponent,
    ComponentsLibraryComponent,
    FooterComponent,
    ItemsComponent,
    NodePictogramComponent,
    NodeItemsComponent,
    ForeignItemsComponent,
    ItemPictogramComponent,
    ItemAccessLevelComponent,
    FromCommunitiesComponent,
    FromPartnershipsComponent,
    SelectCommunityDialogComponent,
    SelectPartnerDialogComponent,
    OpenNodeProfileComponent,
    NodeProfilePictogramComponent,
    QueryComponent,
    NodeQueryComponent,
    CommunityQueryComponent,
    PartnershipQueryComponent,
    ForeignQueryComponent,
    MyOrgQueryComponent,
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
