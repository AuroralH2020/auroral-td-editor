import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '@core/models/item.model';

@Component({
  selector: 'app-your-item-type',
  templateUrl: './your-item-type.component.html',
  styleUrls: ['./your-item-type.component.scss']
})
export class YourItemTypeComponent {

  @Input() type: ItemType | undefined | null

}
