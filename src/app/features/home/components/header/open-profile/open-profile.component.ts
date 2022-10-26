import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@core/services/user/user.service';
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

  constructor(private _broadcatser: BroadcasterService, private _router: Router, private _user: UserService, private _snackbar: SnackBarService) {
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
    return this._user.isLoggedIn;
  }

  get profile() {
    return this._user.profile;
  }

  get color() {
    return this._user.profile?.color ?? 'black';
  }

  get photo() {
    return undefined;
  }

  async logout() {
    this._broadcatser.broadcast(CONSTANTS.SHOW_LOADER, true);
    // fake waiting to give visual feedback to user that loading is done
    await new Promise(resolve => setTimeout(resolve, 1000));
    this._user.logout();
    this._broadcatser.broadcast(CONSTANTS.SHOW_LOADER, false);
    // and then navigate to login page
    this._router.navigate(['/auth/login']);
    this._snackbar.showMessage('Log out successfull.');
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }

}
