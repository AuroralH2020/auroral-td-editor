import * as shared from '@shared/index'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from '../material/material.module'
import { ReactiveFormsModule } from '@angular/forms'
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SadFaceComponent } from './components/misc/sad-face/sad-face.component';

@NgModule({
  declarations: [...shared.components, ...shared.directives, ...shared.pipes],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    ClipboardModule,
  ],
  exports: [...shared.components, ...shared.directives, ...shared.pipes],
})
export class SharedModule {}
