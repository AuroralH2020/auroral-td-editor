import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDetailRoutingModule } from './add-detail-routing.module';
import { AddDetailComponent } from './add-detail.component';
import { PropsComponent } from './sections/props/props.component';
import { EventsComponent } from './sections/events/events.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from '@features/td-editor/td-editor-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AddDetailComponent,
    PropsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    AddDetailRoutingModule,
    SharedModule,
    HomeRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class AddDetailModule { }
