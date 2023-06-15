import { CommonModule } from '@angular/common'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { ToastComponent } from './components/toast/toast.component'
import { ToastModule } from 'primeng/toast'
import { HeaderComponent } from './components/header/header.component'
import { NodeProfileComponent } from './components/header/open-node-profile/node-profile.component'
import { NodeProfilePictogramComponent } from './components/header/node-profile-pictogram/node-profile-pictogram.component'

import { SharedModule } from '@shared/shared.module'
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module'

@NgModule({
  declarations: [ToastComponent, HeaderComponent, NodeProfileComponent, NodeProfilePictogramComponent],
  imports: [CommonModule, ToastModule, SharedModule, PrimeNgModule],
  exports: [ToastComponent, HeaderComponent],
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
