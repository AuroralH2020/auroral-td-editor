import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthTokens } from '@core/models/user.model';
import { UserService } from '@core/services/user/user.service';
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

  constructor(private _router: Router, private _user: UserService, private _fb: FormBuilder) { }

  protected form!: FormGroup;
  protected username: FormControl = new FormControl('', {
    validators: Validators.required,
    updateOn: 'change'
  });
  protected password: FormControl = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit(): void {
    this.form = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  getEmailErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('minLength') ? 'Password too short' : '';
  }

  onLoginClick() {
    if (!this.form.valid) {
      return;
    }
    this.loading = true;
    this._user.login({
      username: this.form.value.username,
      password: this.form.value.password,
    }).then((newTokens) => {
      if (newTokens) {
        // update token store
        this._user.storeTokens(newTokens);
        this._router.navigate(['/home']);
      }
      this.loading = false;
      // no token received
      return throwError(() => 'no refresh token found');
    }, (error) => this.loading = false );
  }

}
