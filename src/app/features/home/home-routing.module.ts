import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { HomeComponent } from './home.component';
import { MenuItemComponent } from './sections/menu-item/menu-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'sections/menu-item-1', pathMatch: 'full' },
  {
    path: 'sections', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'menu-item-1', component: MenuItemComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
