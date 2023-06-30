import { Component, Input } from '@angular/core';
import { ItemProp } from '@core/models/item.model';

@Component({
  selector: 'app-your-item-props',
  templateUrl: './your-item-props.component.html',
  styleUrls: ['./your-item-props.component.scss']
})
export class YourItemPropsComponent {
  @Input() props: ItemProp[] | undefined | null
  @Input() summaryMode: boolean = false
}
