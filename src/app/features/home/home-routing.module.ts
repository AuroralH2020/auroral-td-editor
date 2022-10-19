import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { HomeComponent } from './home.component';
import { ItemsComponent } from './sections/items/items.component';
import { CompaniesComponent } from './sections/companies/companies.component';

const routes: Routes = [
  { path: '', redirectTo: 'sections/items', pathMatch: 'full' },
  {
    path: 'sections', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'items', component: ItemsComponent },
      { path: 'companies', component: CompaniesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
