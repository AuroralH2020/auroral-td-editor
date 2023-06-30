import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TdEditorComponent } from './td-editor.component'
import { TypeComponent } from './sections/type/type.component'
import { InfoComponent } from './sections/info/info.component'
import { PropsComponent } from './sections/props/props.component'
import { EventsComponent } from './sections/events/events.component'
import { SummaryComponent } from './sections/summary/summary.component'

const sections: any = [
  {
    path: 'type',
    component: TypeComponent,
    data: {
      saveComponent: true,
    },
  },
  {
    path: 'info',
    component: InfoComponent,
    data: {
      saveComponent: true,
    },
  },
  {
    path: 'props',
    component: PropsComponent,
    data: {
      saveComponent: true,
    },
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      saveComponent: true,
    },
  },
  {
    path: 'summary',
    component: SummaryComponent,
    data: {
      saveComponent: true,
    },
  },
]

const routes: Routes = [
  { path: '', redirectTo: `sections/${sections[0].path}`, pathMatch: 'full' },
  {
    path: 'sections',
    component: TdEditorComponent,
    children: sections,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
