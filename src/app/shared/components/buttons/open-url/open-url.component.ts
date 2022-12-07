import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-open-url',
  templateUrl: './open-url.component.html',
  styleUrls: ['./open-url.component.scss'],
})
export class OpenUrlComponent implements OnInit {
  @Input() url?: string

  constructor() {}

  ngOnInit(): void {}

  openUrl() {
    if (this.url) {
      window.open(this.url, '_blank')
    }
  }
}
