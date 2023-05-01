import { CommonModule } from '@angular/common'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { ToastComponent } from './components/toast/toast.component'
import { ToastModule } from 'primeng/toast'

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, ToastModule],
  exports: [ToastComponent],
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
