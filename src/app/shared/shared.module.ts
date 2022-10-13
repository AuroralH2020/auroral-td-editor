import * as shared from '@shared/index';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [...shared.components, ...shared.directives, ...shared.pipes],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [...shared.components, ...shared.directives, ...shared.pipes],
})
export class SharedModule { }
