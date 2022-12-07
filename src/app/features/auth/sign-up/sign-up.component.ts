import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service';
import { CONSTANTS } from '@core/services/constants';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  $destroy: Subject<void> = new Subject();

  loading: boolean = false;

  protected form!: FormGroup;
  protected username: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });
  protected email: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });
  protected password: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });
  protected reapeatPassword: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });

  ngOnInit(): void {
    this.form = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      reapeatPassword: this.reapeatPassword,
    });
  }

  constructor(private _broadcatser: BroadcasterService, private _router: Router) {
    this._broadcatser
      .listen(CONSTANTS.SHOW_LOADER)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (data) => {
          if (typeof data == "boolean") {
            this.loading = data;
          }
        }
      });
  }

  private async _setDummyUser() {
    this._broadcatser.broadcast(CONSTANTS.SHOW_LOADER, true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    localStorage.setItem('token', 'dummy');
    localStorage.setItem('first-name', 'Johnny');
    localStorage.setItem('last-name', 'Cache');
    localStorage.setItem('email', 'johnny@cache.com');
    this._broadcatser.broadcast(CONSTANTS.SHOW_LOADER, false);
  }

  async onSubmit(contactForm: NgForm) {
    await this._setDummyUser();

    // fake waiting to give visual feedback to user that loading is done
    await new Promise(resolve => setTimeout(resolve, 300));
    // and then navigate to home page
    this._router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.loading = false;
    this.$destroy.next();
    this.$destroy.complete();
  }

}
