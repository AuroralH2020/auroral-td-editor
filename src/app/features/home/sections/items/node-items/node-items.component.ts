import { Component, OnInit, ViewChild } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { MenuItem } from 'primeng/api/menuitem'
import { DialogService } from 'primeng/dynamicdialog'
import { Menu } from 'primeng/menu'

@Component({
  selector: 'app-node-items',
  templateUrl: './node-items.component.html',
  styleUrls: ['./node-items.component.scss'],
  providers: [DialogService],
})
export class NodeItemsComponent implements OnInit {
  @ViewChild('menu') menu!: Menu
  itemsUI: ItemUI[] = []
  addItemMenuOptions: MenuItem[] = [
    {
      label: 'Upload TD',
      icon: 'pi pi-code',
      command: () => {
        this.openUploadTdDialog()
      },
    },
    {
      label: 'Use Editor',
      icon: 'pi pi-file-edit',
      command: () => {
        this.openUploadTdDialog()
      },
    },
  ]

  showUploadTdDialog: boolean = false

  constructor(private _itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsUI = this._itemsService.myItems ?? []
    document.body.addEventListener('click', this._hideMenu)
  }

  toogleMenu(event: MouseEvent) {
    if (!this.menu.visible) {
      this.menu.show(event)
      event.stopPropagation()
    }
  }

  private _hideMenu = () => {
    if (this.menu.visible) {
      this.menu.hide()
    }
  }

  openUploadTdDialog() {
    this.showUploadTdDialog = true
  }
}
