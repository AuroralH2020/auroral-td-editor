import { Component, Input } from '@angular/core'
import { ItemEvent } from '@core/models/item.model'

@Component({
  selector: 'app-your-item-events',
  templateUrl: './your-item-events.component.html',
  styleUrls: ['./your-item-events.component.scss'],
})
export class YourItemEventsComponent {
  @Input() events: ItemEvent[] | undefined | null
  @Input() summaryMode: boolean = false
}
