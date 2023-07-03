import { Component, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { ItemInfo, ItemType, PropType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import { Observable } from 'rxjs'
import { Clipboard } from '@angular/cdk/clipboard'
import { ConfirmDialog } from 'primeng/confirmdialog'
import { ConfirmEventType, ConfirmationService } from 'primeng/api'
import { routes } from 'src/app/app-routing.module'

const imports = {
  adp: 'https://auroral.iot.linkeddata.es/def/adapters#',
  om: 'http://www.ontology-of-units-of-measure.org/resource/om-2/',
  geo: 'http://www.w3.org/2003/01/geo/wgs84_pos#',
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [ConfirmationService],
})
export class SummaryComponent {
  @ViewChild('op') op!: ConfirmDialog

  showTD: boolean = false
  showMissingSections: boolean = false
  td!: object

  constructor(
    private _itemsService: ItemsService,
    private _router: Router,
    private _snackbar: SnackBarService,
    private _clipboard: Clipboard,
    private _confirmationService: ConfirmationService
  ) {}

  async onCopy() {
    this._clipboard.copy(JSON.stringify(this.td, null, 2))
    this._snackbar.showMessage('TD copied to clipboard')
  }

  onGenerate() {
    const td = this._generateTD()
    if (td) {
      this.td = td
      this.showTD = true
      this._itemsService.updateKafka()
    }
  }

  onCreateNew() {
    this._confirmationService.confirm({
      message: 'You will reset the editor and lost all the current progress. Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        await this._itemsService.reset()
        window.location.href = '/td-editor/sections/type'
      },
    })
  }

  private _generateTD(): object | undefined {
    const type = this._itemsService.type
    const info = this._itemsService.info
    const props = this._itemsService.props
    const events = this._itemsService.events

    if (!type || !info) {
      this.showMissingSections = true
      return
    }
    return {
      '@context': ['https://www.w3.org/2019/wot/td/v1', imports],
      security: ['nosec_sc'],
      securityDefinitions: {
        nosec_sc: {
          scheme: 'nosec',
        },
      },
      'geo:location': {
        'geo:lat': info?.location?.lat,
        'geo:long': info?.location?.lon,
      },
      title: info?.title,
      adapterId: encodeURIComponent(info?.title ?? ''),
      '@type': `adp:${type?.title}`,
      description: info?.description,
      properties: Object.fromEntries(
        (props ?? []).map((prop) => [
          encodeURIComponent(prop.name),
          {
            title: prop.name,
            description: prop.description,
            '@type': _formatType(prop.propType),
            unit: prop.unitType,
            readOnly: true,
            type: prop.unitDataType.name,
            forms: prop.forms.map((form) => {
              return {
                op: form.type,
                href: form.url,
              }
            }),
          },
        ])
      ),
    }
  }

  get type$(): Observable<ItemType | null> {
    return this._itemsService.type$
  }

  get info$(): Observable<ItemInfo | null> {
    return this._itemsService.info$
  }
}

function _formatType(type: PropType): string {
  if (type.name === 'Unknown') {
    return type.name
  }
  for (const key in imports) {
    const imp = imports[key as keyof typeof imports]
    if (type.url.startsWith(imp)) {
      return `${key}:${type.name}`
    }
  }
  return type.url
}
