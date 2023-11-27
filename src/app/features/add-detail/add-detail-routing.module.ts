import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailComponent } from './add-detail.component';
import { PropsComponent } from './sections/props/props.component';
import { EventsComponent } from './sections/events/events.component';

const sections: any = [
  {
    path: 'props',
    component: PropsComponent,
    data: {
      saveComponent: false,
    },
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      saveComponent: false,
    },
  },
]

const routes: Routes = [
  {
    path: 'sections',
    component: AddDetailComponent,
    children: sections,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDetailRoutingModule { }
