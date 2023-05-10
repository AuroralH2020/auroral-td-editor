import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'
import { ComponentsLibraryComponent } from './sections/components-library/components-library.component'

const sections: any = [
  { path: 'components-library', component: ComponentsLibraryComponent },
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
