import * as shared from '@shared/index';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [...shared.components, ...shared.directives, ...shared.pipes],
  imports: [
    CommonModule,
    MatFormFieldModule,
  ],
  exports: [...shared.components, ...shared.directives, ...shared.pipes],
})
export class SharedModule {}
