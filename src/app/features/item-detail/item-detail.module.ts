import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { NodeItemComponent } from './node-item/node-item.component';
import { CommunityItemComponent } from './community-item/community-item.component';
import { PartnershipItemComponent } from './partnership-item/partnership-item.component';
import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { ItemDetailComponent } from './item-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReadPropComponent } from './components/read-prop/read-prop.component';
import { DetailDialogComponent } from './components/read-prop/detail-dialog/detail-dialog.component';



@NgModule({
  declarations: [
    NodeItemComponent,
    CommunityItemComponent,
    PartnershipItemComponent,
    ItemDetailComponent,
    HeaderComponent,
    DetailComponent,
    ReadPropComponent,
    DetailDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeNgModule,
    ItemDetailRoutingModule,
  ]
})
export class ItemDetailModule { }
