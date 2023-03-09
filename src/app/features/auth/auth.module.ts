import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '@shared/shared.module'
import { MaterialModule } from 'src/app/material/material.module'

import { AuthRoutingModule } from './auth-routing.module'
import { AuthComponent } from './auth.component'
import { LogInComponent } from './log-in/log-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { EmailVerificationComponent } from './email-verification/email-verification.component'
import { AuroralHyperlinkComponent } from './components/auroral-hyperlink/auroral-hyperlink.component'

import { CodeInputModule } from 'angular-code-input'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AuthComponent, LogInComponent, SignUpComponent, EmailVerificationComponent, AuroralHyperlinkComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    CodeInputModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AuthModule {}
