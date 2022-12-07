import { Component, Input, OnInit } from '@angular/core'
import { Item } from '@core/models/item.model'
import { PictogramType } from '@shared/components/misc/pictogram/pictogram.component'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  @Input() detail!: Item

  constructor() {}

  ngOnInit(): void {}
}
