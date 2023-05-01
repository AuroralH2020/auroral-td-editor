import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '@shared/shared.module'

import { AuthRoutingModule } from './auth-routing.module'
import { AuthComponent } from './auth.component'
import { LogInComponent } from './log-in/log-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { EmailVerificationComponent } from './email-verification/email-verification.component'

import { CodeInputModule } from 'angular-code-input'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module'

@NgModule({
  declarations: [AuthComponent, LogInComponent, SignUpComponent, EmailVerificationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    CodeInputModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
  ],
})
export class AuthModule {}
