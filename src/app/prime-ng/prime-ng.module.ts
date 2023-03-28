import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InputTextModule } from "primeng/inputtext";
import { TabViewModule } from "primeng/tabview";
import { FieldsetModule } from "primeng/fieldset";
import { PasswordModule } from "primeng/password";
import { MultiSelectModule } from "primeng/multiselect";
import { CheckboxModule } from "primeng/checkbox";
import { TagModule } from "primeng/tag";

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
  ],
  exports: [
    InputTextModule,
    TabViewModule,
    FieldsetModule,
    PasswordModule,
    MultiSelectModule,
    CheckboxModule,
    TagModule,
  ],
})
export class PrimeNgModule {}
