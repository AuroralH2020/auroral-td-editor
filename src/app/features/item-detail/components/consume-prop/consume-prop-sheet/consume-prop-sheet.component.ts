import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ItemUI, PropertyUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'

interface RequestParam {
  key: FormControl
  value: FormControl
}

@Component({
  selector: 'app-consume-prop-sheet',
  templateUrl: './consume-prop-sheet.component.html',
  styleUrls: ['./consume-prop-sheet.component.scss'],
})
export class ConsumePropSheetComponent {
  @Input() oid!: string
  @Input() item!: ItemUI
  @Input() prop!: PropertyUI
}
