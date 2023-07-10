import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SharedModule } from '@shared/shared.module'
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module'

import { HomeRoutingModule } from './td-editor-routing.module'
import { TdEditorComponent } from './td-editor.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeComponent } from './sections/type/type.component';
import { InfoComponent } from './sections/info/info.component';
import { PropsComponent } from './sections/props/props.component';
import { EventsComponent } from './sections/events/events.component';
import { SummaryComponent } from './sections/summary/summary.component';
import { YourItemComponent } from './components/your-item/your-item.component';
import { AddPropDialogComponent } from './sections/props/add-prop-dialog/add-prop-dialog.component';
import { AddEventDialogComponent } from './sections/events/add-event-dialog/add-event-dialog.component';
import { YourItemTypeComponent } from './components/your-item/your-item-type/your-item-type.component';
import { YourItemInfoComponent } from './components/your-item/your-item-info/your-item-info.component';
import { YourItemPropsComponent } from './components/your-item/your-item-props/your-item-props.component';
import { YourItemEventsComponent } from './components/your-item/your-item-events/your-item-events.component';
import { EditTdComponent } from './sections/summary/edit-td/edit-td.component';

@NgModule({
  declarations: [
    TdEditorComponent,
    TypeComponent,
    InfoComponent,
    PropsComponent,
    EventsComponent,
    SummaryComponent,
    YourItemComponent,
    AddPropDialogComponent,
    AddEventDialogComponent,
    YourItemTypeComponent,
    YourItemInfoComponent,
    YourItemPropsComponent,
    YourItemEventsComponent,
    EditTdComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
})
export class TdEditorModule {}