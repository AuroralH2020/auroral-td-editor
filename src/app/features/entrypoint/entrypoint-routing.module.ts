import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EntrypointComponent } from './entrypoint.component'

const routes: Routes = [{ path: '', component: EntrypointComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrypointRoutingModule {}
