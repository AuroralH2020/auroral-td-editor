import * as shared from '@shared/index'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { PrimeNgModule } from '../prime-ng/prime-ng.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [...shared.components, ...shared.directives, ...shared.pipes],
  imports: [PrimeNgModule, CommonModule, FormsModule, ReactiveFormsModule, ClipboardModule, FontAwesomeModule],
  exports: [...shared.components, ...shared.directives, ...shared.pipes],
})
export class SharedModule {}
