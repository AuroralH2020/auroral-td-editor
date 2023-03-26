import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InputTextModule } from "primeng/inputtext";
import { TabViewModule } from "primeng/tabview";
import { FieldsetModule } from "primeng/fieldset";
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [],
  imports: [CommonModule, InputTextModule, TabViewModule, FieldsetModule, PasswordModule],
  exports: [InputTextModule, TabViewModule, FieldsetModule, PasswordModule],
})
export class PrimeNgModule {}
