import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { ItemType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { Observable } from 'rxjs'
import { itemTypes } from 'src/app/data'
import { delay } from 'src/app/utils'

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent {
  searchValue: string = ''
  focus: boolean = false

  blockUI: boolean = false

  types: ItemType[] = []

  @ViewChild('search') search!: ElementRef

  constructor(private _itemsService: ItemsService, private _router: Router) {
    this.types = itemTypes
  }

  focusSearch() {
    setTimeout(() => {
      this.search.nativeElement.focus()
    }, 0)
  }

  onBlur() {
    this.focus = false
  }

  onFocus() {
    this.focus = true
  }

  onSearch(event: Event) {
    if (this.searchValue.length >= 3) {
      this.types = itemTypes.filter((element) => {
        return element.title.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    } else {
      this.types = itemTypes
    }
  }

  async onConfirm(type: ItemType) {
    this._itemsService.updateType(type)
    this.blockUI = true
    await delay(300)
    let route = '/td-editor/sections/props'
    let editMode = this._itemsService.editMode
    if (editMode?.active) {
      route = editMode.prevRoute
      this._itemsService.updateEditMode(null)
    }
    this._router.navigateByUrl(route)
    await this._router.navigateByUrl(route)
    this.blockUI = false
  }

  get type$(): Observable<ItemType | null> {
    return this._itemsService.type$
  }
}
