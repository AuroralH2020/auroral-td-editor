import { Component, Input } from '@angular/core'
import { ItemInfo } from '@core/models/item.model'

@Component({
  selector: 'app-your-item-info',
  templateUrl: './your-item-info.component.html',
  styleUrls: ['./your-item-info.component.scss'],
})
export class YourItemInfoComponent {
  @Input() info: ItemInfo | undefined | null
}
