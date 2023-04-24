import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { HomeComponent } from './home.component';
import { ComponentsLibraryComponent } from './sections/components-library/components-library.component';
import { ItemsComponent } from './sections/items/items.component';

const sections: any = [
  // { path: 'components-library', component: ComponentsLibraryComponent },
  { path: 'items', component: ItemsComponent },
]

const routes: Routes = [
  { path: '', redirectTo: `sections/${sections[0].path}`, pathMatch: 'full' },
  {
    path: 'sections', component: HomeComponent,
    children: sections
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
