import { Component, OnInit } from '@angular/core';
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service';
import { CONSTANTS } from '@core/services/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  folded: boolean = false;

  constructor(private _broadcaster: BroadcasterService) { }

  ngOnInit(): void {
    this._broadcaster.listen(CONSTANTS.MENU_FOLDED).subscribe((value: any) => {
      this.folded = value
    })
  }

}
