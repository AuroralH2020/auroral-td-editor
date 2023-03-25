import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service';
import { CONSTANTS } from '@core/services/constants';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  @Input() path: string = '';
  @Input() name: string | undefined;
  @Input() icon: string | undefined;

  folded: boolean = false;

  constructor(protected router: Router, private _broadcaster: BroadcasterService) { }

  ngOnInit(): void {
    this.folded = JSON.parse(sessionStorage.getItem(CONSTANTS.MENU_FOLDED) ?? 'false')
    this._broadcaster.listen(CONSTANTS.MENU_FOLDED).subscribe((value: any) => {
      this.folded = value
    })
  }

  get isActive(): boolean {
    return this.router.url === this.path;
  }

}
