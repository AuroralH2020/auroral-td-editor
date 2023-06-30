import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ItemEvent, ItemInfo, ItemProp, ItemType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable } from 'rxjs'

interface _Section {
  key: string
  label: string
  value: Observable<any>
}

@UntilDestroy()
@Component({
  selector: 'app-your-item',
  templateUrl: './your-item.component.html',
  styleUrls: ['./your-item.component.scss'],
})
export class YourItemComponent implements OnInit {

  @Input() summaryMode: boolean = false

  constructor(private _itemsService: ItemsService, private _router: Router) {}

  sections!: _Section[]

  ngOnInit(): void {
    this.sections = [
      {
        key: 'type',
        label: 'Type',
        value: this._itemsService.type$,
      },
      {
        key: 'info',
        label: 'Info',
        value: this._itemsService.info$,
      },
      {
        key: 'props',
        label: 'Props',
        value: this._itemsService.props$,
      },
      {
        key: 'events',
        label: 'Events',
        value: this._itemsService.events$,
      },
    ]
  }

  onEdit(section: _Section) {
    const current = this._router.url
    this._itemsService.updateEditMode({ active: true, prevRoute: current })
    this._router.navigateByUrl('/td-editor/sections/' + section.key)
  }
}
