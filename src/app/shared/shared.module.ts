import * as shared from '@shared/index';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormFieldComponent } from './components/inputs/form-field/form-field.component';

@NgModule({
  declarations: [...shared.components, ...shared.directives, ...shared.pipes, FormFieldComponent],
  imports: [CommonModule],
  exports: [...shared.components, ...shared.directives, ...shared.pipes],
})
export class SharedModule {}
