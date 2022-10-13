import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '@shared/shared.module';
import { CodeInputModule } from 'angular-code-input';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { AuroralHyperlinkComponent } from './components/auroral-hyperlink/auroral-hyperlink.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent,
    SignUpComponent,
    EmailVerificationComponent,
    AuroralHyperlinkComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    CodeInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class AuthModule { }
