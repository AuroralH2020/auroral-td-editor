import { Component, OnInit } from '@angular/core'
import { AdminService } from '@core/services/admin/admin.service'
import { ItemsService } from '@core/services/item/item.service'
import { ConfirmationService, MenuItem } from 'primeng/api'
import { nodeUImode } from 'src/app/app.module'

@Component({
  selector: 'app-td-editor',
  templateUrl: './td-editor.component.html',
  styleUrls: ['./td-editor.component.scss'],
  providers: [ConfirmationService],
})
export class TdEditorComponent implements OnInit {
  constructor(
    private _itemsService: ItemsService,
    private _confirmationService: ConfirmationService,
    private _admin: AdminService
  ) {}

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
      message: `You will ${
        this.nodeUI ? 'close' : 'reset'
      } the editor and loose all the current progress. Are you sure that you want to proceed?`,
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        await this._itemsService.reset()
        if (nodeUImode) {
          parent.postMessage('close', '*')
        } else {
          window.location.href = '/td-editor/sections/type'
        }
      },
    })
  }

  get nodeUI() {
    return nodeUImode
  }
}
