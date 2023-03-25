import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service';
import { CONSTANTS } from '@core/services/constants';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private _broadcaster: BroadcasterService, private _cd: ChangeDetectorRef) { }

  folded = false

  ngOnInit(): void {
    this.folded = JSON.parse(sessionStorage.getItem(CONSTANTS.MENU_FOLDED) ?? 'false')
  }

  toggleMenu() {
    this.folded = !this.folded
    sessionStorage.setItem(CONSTANTS.MENU_FOLDED, JSON.stringify(this.folded))
    this._broadcaster.broadcast(CONSTANTS.MENU_FOLDED, this.folded);
    this._cd.markForCheck()
  }

}
