import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { HomeComponent } from './home.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';
import { Item4Component } from './item4/item4.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu/item-1', pathMatch: 'full' },
  {
    path: 'menu', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'item-1', component: Item1Component },
      { path: 'item-2', component: Item2Component },
      { path: 'item-3', component: Item3Component },
      { path: 'item-4', component: Item4Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
