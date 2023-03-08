import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { HomeComponent } from './home.component';
import { DataServicesComponent } from './sections/data-services/data-services.component';
import { ItemsComponent } from './sections/items/items.component';
import { NodesComponent } from './sections/nodes/nodes.component';

const routes: Routes = [
  { path: '', redirectTo: 'sections/items', pathMatch: 'full' },
  {
    path: 'sections', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'items', component: ItemsComponent },
      { path: 'data-services', component: DataServicesComponent },
      { path: 'nodes', component: NodesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
