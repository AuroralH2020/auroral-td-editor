import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTokens } from '@core/models/user.model';
import { AuthService } from '@core/services/auth/auth.service';
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service';
import { CONSTANTS } from '@core/services/constants';
import { Subject, switchMap, takeUntil, throwError } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loading: boolean = false;

  constructor(private _router: Router, private _auth: AuthService, private _fb: FormBuilder) { }

  protected form!: FormGroup;
  protected email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  protected password: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ]);

  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('minLength') ? 'Password too short' : '';
  }

  onLoginClick() {
    if (!this.form.valid) {
      return;
    }
    this.loading = true;
    this._auth.login({
      email: this.form.value.email,
      password: this.form.value.password,
    }).subscribe(
      {
        next: (newTokens: AuthTokens) => {
          if (newTokens) {
            // update token store
            this._auth.storeTokens(newTokens);
            this._router.navigate(['/home']);
          }
          this.loading = false;
          // no token received
          return throwError(() => 'no refresh token found');
        },
        error: (err) => {
          this.loading = false;
        }
      }
    );
  }

}
