import { Component, Input, OnInit } from '@angular/core'

export type PictogramType = 'device' | 'service' | 'node'

@Component({
  selector: 'app-pictogram',
  templateUrl: './pictogram.component.html',
  styleUrls: ['./pictogram.component.scss'],
})
export class PictogramComponent implements OnInit {
  @Input() name: string | null | undefined
  @Input() type: PictogramType | null | undefined
  @Input() extraInfo: string | null | undefined
  @Input() textStyleClasses: string | undefined

  icon!: string
  color!: string

  constructor() {}

  private _determineType() {
    switch (this.type) {
      case 'service':
        this.icon = 'cloud'
        this.color = '#E5B38E'
        break
      case 'node':
        this.icon = 'device_hub'
        this.color = '#54d6d6'
        break
      default:
        this.icon = 'router'
        this.color = '#00B6EB'
        break
    }
  }

  ngOnInit(): void {
    this._determineType()
  }
}
