import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PartnershipItemComponent } from './foreign-item/partnership-item/partnership-item.component'
import { ItemDetailComponent } from './item-detail.component'
import { NodeItemComponent } from './node-item/node-item.component'
import { CommunityItemComponent } from './foreign-item/community-item/community-item.component'
import { MyOrgItemComponent } from './my-org-item/my-org-item.component'

const routes: Routes = [
  {
    path: '',
    component: ItemDetailComponent,
    children: [
      {
        path: 'node',
        component: NodeItemComponent,
      },
      {
        path: 'myorg',
        component: MyOrgItemComponent,
      },
      {
        path: 'community',
        component: CommunityItemComponent,
      },
      {
        path: 'partnership',
        component: PartnershipItemComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetailRoutingModule {}
