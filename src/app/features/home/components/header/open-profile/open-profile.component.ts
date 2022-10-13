import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service';
import { CONSTANTS } from '@core/services/constants';
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-open-profile',
  templateUrl: './open-profile.component.html',
  styleUrls: ['./open-profile.component.scss']
})
export class OpenProfileComponent implements OnInit {

  $destroy: Subject<void> = new Subject();

  loading: boolean = false;

  ngOnInit(): void {
    return;
  }

  constructor(private _broadcatser: BroadcasterService, private _router: Router, private _authservice: AuthService, private _snackbar: SnackBarService) {
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

  get isLoggedIn() {
    return this._authservice.isLoggedIn;
  }

  get name() {
    return localStorage.getItem('first-name') + ' ' + localStorage.getItem('last-name');
  }

  get photo() {
    return undefined;
  }

  get email() {
    return localStorage.getItem('email');
  }

  async logout() {
    this._broadcatser.broadcast(CONSTANTS.SHOW_LOADER, true);
    // fake waiting to give visual feedback to user that loading is done
    await new Promise(resolve => setTimeout(resolve, 1000));
    localStorage.clear();
    this._broadcatser.broadcast(CONSTANTS.SHOW_LOADER, false);
    // and then navigate to login page
    this._router.navigate(['/auth/login']);
    this._snackbar.showMessage('You were logged out.');
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }

}
