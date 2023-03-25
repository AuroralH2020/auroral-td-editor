import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { HomeComponent } from './home.component';
import { ComponentsLibraryComponent } from './sections/components-library/components-library.component';
import { MenuItemComponent } from './sections/menu-item/menu-item.component';

const sections: any = [
  { path: 'components-library', component: ComponentsLibraryComponent },
  { path: 'menu-item-1', component: MenuItemComponent },
]

const routes: Routes = [
  { path: '', redirectTo: `sections/${sections[0].path}`, pathMatch: 'full' },
  {
    path: 'sections', component: HomeComponent, canActivate: [AuthGuard],
    children: sections
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
