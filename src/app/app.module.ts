import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from '@core/core.module'
import { HTTPReqResInterceptor } from '@core/services/http-req-res.interceptor'
import { environment } from '@env'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FakeBackendInterceptor } from '@core/services/fake-backend.interceptor'
import { JwtInterceptor } from '@core/services/jwt.interceptor'
import { PrimeNgModule } from './prime-ng/prime-ng.module'
import { ConfirmationService, MessageService } from 'primeng/api'
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { SharedModule } from '@shared/shared.module'
import { RouteReuseStrategy } from '@angular/router'
import { CacheRouteReuseStrategy } from '@core/route-strategy/cache-route-reuse.strategy'
import { EntrypointModule } from './features/entrypoint/entrypoint.module';
import { AddDetailModule } from './features/add-detail/add-detail.module'

export var nodeUImode = false

function initializeApp(): Promise<void> {
  return new Promise((resolve, reject) => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    nodeUImode = JSON.parse(urlParams.get('nodeUI') ?? 'false') ?? false
    resolve()
  })
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    PrimeNgModule,
    FontAwesomeModule,
    SharedModule,
    EntrypointModule,
    AddDetailModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true,
    },
    { provide: 'BASE_URL', useValue: environment.baseurl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPReqResInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: CacheRouteReuseStrategy,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far)
  }
}
