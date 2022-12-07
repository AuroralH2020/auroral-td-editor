import * as shared from '@shared/index'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ReactiveFormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSelectModule } from '@angular/material/select'
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [...shared.components, ...shared.directives, ...shared.pipes],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    MatTabsModule,
    MatSelectModule,
    ClipboardModule,
    MatButtonToggleModule
  ],
  exports: [...shared.components, ...shared.directives, ...shared.pipes],
})
export class SharedModule {}
