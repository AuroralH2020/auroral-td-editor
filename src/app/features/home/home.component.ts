import { Component, OnInit } from '@angular/core'
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service'
import { CONSTANTS } from '@core/services/constants'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  folded: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.folded = JSON.parse(sessionStorage.getItem(CONSTANTS.MENU_FOLDED) ?? 'false')
  }

  toggleMenu = () => {
    this.folded = !this.folded
    sessionStorage.setItem(CONSTANTS.MENU_FOLDED, JSON.stringify(this.folded))
  }
}
