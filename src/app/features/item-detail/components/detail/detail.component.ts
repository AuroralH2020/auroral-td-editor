import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { ItemUI } from '@core/models/item.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() item!: ItemUI
  @ContentChild('descriptionRef') descriptionRef: TemplateRef<any> | undefined
  @ContentChild('propsHeaderRef') propsHeaderRef: TemplateRef<any> | undefined
  @ContentChild('propsBodyRef') propsBodyRef: TemplateRef<any> | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
