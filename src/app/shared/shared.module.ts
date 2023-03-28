import * as shared from '@shared/index'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from '../material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { PrimeNgModule } from '../prime-ng/prime-ng.module'



@NgModule({
  declarations: [...shared.components, ...shared.directives, ...shared.pipes],
  imports: [MaterialModule, PrimeNgModule, CommonModule, FormsModule, ReactiveFormsModule, ClipboardModule],
  exports: [...shared.components, ...shared.directives, ...shared.pipes],
})
export class SharedModule {}
