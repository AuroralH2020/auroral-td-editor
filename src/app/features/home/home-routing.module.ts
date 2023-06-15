import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'
import { ItemsComponent } from './sections/items/items.component'
import { ComponentsLibraryComponent } from './sections/components-library/components-library.component'

const sections: any = [
  { path: 'components-library', component: ComponentsLibraryComponent },
  {
    path: 'items',
    component: ItemsComponent,
    data: {
      saveComponent: true,
    },
  },
]

const routes: Routes = [
  { path: '', redirectTo: `sections/${sections[0].path}`, pathMatch: 'full' },
  {
    path: 'sections',
    component: HomeComponent,
    children: sections,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
