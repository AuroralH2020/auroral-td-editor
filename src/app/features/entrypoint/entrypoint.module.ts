import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module'
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module'

import { EntrypointRoutingModule } from './entrypoint-routing.module';
import { EntrypointComponent } from './entrypoint.component';


@NgModule({
  declarations: [
    EntrypointComponent
  ],
  imports: [
    CommonModule,
    EntrypointRoutingModule,
    SharedModule,
    PrimeNgModule,
  ]
})
export class EntrypointModule { }
