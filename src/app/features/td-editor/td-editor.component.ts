import { Component, OnInit } from '@angular/core'
import { ItemsService } from '@core/services/item/item.service'
import { ConfirmationService, MenuItem } from 'primeng/api'

@Component({
  selector: 'app-td-editor',
  templateUrl: './td-editor.component.html',
  styleUrls: ['./td-editor.component.scss'],
  providers: [ConfirmationService],
})
export class TdEditorComponent implements OnInit {
  constructor(private _itemsService: ItemsService, private _confirmationService: ConfirmationService) {}

  items: MenuItem[] = []

  ngOnInit() {
    this.items = [
      {
        label: 'Type',
        routerLink: 'type',
      },
      {
        label: 'Info',
        routerLink: 'info',
      },
      {
        label: 'Properties',
        routerLink: 'props',
      },
      {
        label: 'Events',
        routerLink: 'events',
      },
      {
        label: 'Summary',
        routerLink: 'summary',
      },
    ]
  }

  resetApp() {
    this._confirmationService.confirm({
      message: 'You will reset the editor and lost all the current progress. Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        await this._itemsService.reset()
        window.location.href = '/td-editor/sections/type'
      },
    })
  }
}
