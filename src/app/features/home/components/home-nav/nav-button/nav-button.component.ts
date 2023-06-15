import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BroadcasterService } from '@core/services/broadcaster/broadcaster.service'

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  @Input() path: string = ''
  @Input() name: string | undefined
  @Input() icon: string | undefined
  @Input() folded: boolean = false

  constructor(protected router: Router, private _broadcaster: BroadcasterService) {}

  ngOnInit(): void {}

  get isActive(): boolean {
    return this.router.url === this.path
  }
}
