import { Component, ViewChild } from '@angular/core'
import { ItemInfo, ItemType, PropType, PropUnitType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { Observable } from 'rxjs'
import { ConfirmDialog } from 'primeng/confirmdialog'
import { ConfirmationService } from 'primeng/api'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { EditTdComponent } from './edit-td/edit-td.component'

const imports = {
  adp: 'https://auroral.iot.linkeddata.es/def/adapters#',
  om: 'http://www.ontology-of-units-of-measure.org/resource/om-2/',
  geo: 'http://www.w3.org/2003/01/geo/wgs84_pos#',
  schema: 'https://schema.org/',
}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [ConfirmationService, DialogService],
})
export class SummaryComponent {
  @ViewChild('op') op!: ConfirmDialog

  ref: DynamicDialogRef | undefined

  showMissingSections: boolean = false

  constructor(
    private _itemsService: ItemsService,
    private _confirmationService: ConfirmationService,
    private _dialogService: DialogService
  ) {}

  onGenerate() {
    const td = this._generateTD()
    if (td) {
      this.ref = this._dialogService.open(EditTdComponent, {
        header: (this._itemsService.type?.title ?? 'Item') + "'s Thing Desctiption",
        data: { td },
      })
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
      ...(info?.location && {
        'geo:location': {
          'geo:lat': info.location.lat,
          'geo:long': info.location.lon,
        },
      }),
      title: info?.title,
      adapterId: encodeURIComponent(info?.title ?? ''),
      '@type': `adp:${type?.title}`,
      ...(info?.domain && {
        domain: info.domain.name,
      }),
      description: info?.description,
      ...(info?.serialNumber && {
        'schema:serialNumber': info.serialNumber,
      }),
      ...(info?.model && {
        'schema:ProductModel': info.model,
      }),
      ...(info?.manufacturer && {
        'schema:manufacturer': {
          ...(info?.manufacturer && {
            name: info.manufacturer,
          }),
        },
      }),
      properties: Object.fromEntries(
        (props ?? []).map((prop) => [
          encodeURIComponent(prop.name),
          {
            title: prop.name,
            description: prop.description,
            '@type': _formatType(prop.propType),
            unit: _formatType(prop.unitType),
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
      events: Object.fromEntries(
        (events ?? []).map((event) => [
          encodeURIComponent(event.name),
          {
            title: event.name,
            description: event.description,
            data: event.data,
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

function _formatType(type: PropType | PropUnitType): string {
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
