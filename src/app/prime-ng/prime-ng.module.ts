import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InputTextModule } from "primeng/inputtext";
import { TabViewModule } from "primeng/tabview";
import { FieldsetModule } from "primeng/fieldset";
import { PasswordModule } from "primeng/password";
import { MultiSelectModule } from "primeng/multiselect";
import { CheckboxModule } from "primeng/checkbox";
import { TagModule } from "primeng/tag";
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    TabViewModule,
    FieldsetModule,
    PasswordModule,
    MultiSelectModule,
    CheckboxModule,
    TagModule,
    InputSwitchModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    DialogModule,
    DynamicDialogModule
  ],
  exports: [
    InputTextModule,
    TabViewModule,
    FieldsetModule,
    PasswordModule,
    MultiSelectModule,
    CheckboxModule,
    TagModule,
    InputSwitchModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    DialogModule,
    DynamicDialogModule
  ],
})
export class PrimeNgModule {}
