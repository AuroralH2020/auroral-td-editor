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
import { ForeignItemsComponent } from './sections/items/foreign-items/foreign-items.component'
import { ItemAccessLevelComponent } from './components/item-access-level/item-access-level.component'
import { FromCommunitiesComponent } from './sections/items/foreign-items/from-communities/from-communities.component'
import { FromPartnershipsComponent } from './sections/items/foreign-items/from-partnerships/from-partnerships.component'
import { SelectCommunityDialogComponent } from './components/select-community-dialog/select-community-dialog.component'
import { SelectPartnerDialogComponent } from './components/select-partner-dialog/select-partner-dialog.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QueryComponent } from './sections/query/query.component';
import { NodeQueryComponent } from './sections/query/node-query/node-query.component';
import { CommunityQueryComponent } from './sections/query/foreign-query/community-query/community-query.component';
import { PartnershipQueryComponent } from './sections/query/foreign-query/partnership-query/partnership-query.component';
import { ForeignQueryComponent } from './sections/query/foreign-query/foreign-query.component';
import { MyOrgQueryComponent } from './sections/query/my-org-query/my-org-query.component';
import { RunQueryComponent } from './sections/query/components/run-query/run-query.component';
import { ItemTableComponent } from './sections/items/components/item-table/item-table.component';
import { MyOrgItemsComponent } from './sections/items/my-org-items/my-org-items.component';
import { NodeItemsComponent } from './sections/items/node-items/node-items.component';
import { TdEditorComponent } from './sections/items/components/td-editor/td-editor.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeNavComponent,
    NavButtonComponent,
    ComponentsLibraryComponent,
    EuContribComponent,
    ItemsComponent,
    NodeItemsComponent,
    ForeignItemsComponent,
    ItemAccessLevelComponent,
    FromCommunitiesComponent,
    FromPartnershipsComponent,
    SelectCommunityDialogComponent,
    SelectPartnerDialogComponent,
    QueryComponent,
    NodeQueryComponent,
    CommunityQueryComponent,
    PartnershipQueryComponent,
    ForeignQueryComponent,
    MyOrgQueryComponent,
    RunQueryComponent,
    ItemTableComponent,
    MyOrgItemsComponent,
    TdEditorComponent,
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
