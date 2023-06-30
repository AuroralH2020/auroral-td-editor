import { CommonModule } from '@angular/common'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { ToastComponent } from './components/toast/toast.component'
import { ToastModule } from 'primeng/toast'

import { SharedModule } from '@shared/shared.module'
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [ToastComponent, FooterComponent],
  imports: [CommonModule, ToastModule, SharedModule, PrimeNgModule],
  exports: [ToastComponent, FooterComponent],
  providers: [],
})
export class CoreModule {
  /* make sure CoreModule is imported only by the AppModule and noone else */
  constructor(@Optional() @SkipSelf() presentInParent: CoreModule) {
    if (presentInParent) {
      throw new Error('CoreModule is already loaded. Import only in AppModule')
    }
  }
}
