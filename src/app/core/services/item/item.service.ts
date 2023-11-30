import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { EditMode, ItemEvent, ItemInfo, ItemProp, ItemType } from '@core/models/item.model'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { BehaviorSubject, firstValueFrom, take } from 'rxjs'
import { delay } from 'src/app/utils'
import * as uuid from 'uuid'

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private _id!: string
  private _type!: BehaviorSubject<ItemType | null>
  private _info!: BehaviorSubject<ItemInfo | null>
  private _props!: BehaviorSubject<ItemProp[] | null>
  private _events!: BehaviorSubject<ItemEvent[] | null>

  private _propsCandidates!: BehaviorSubject<ItemProp[]>
  private _eventsCandidates!: BehaviorSubject<ItemEvent[]>

  private _editMode!: BehaviorSubject<EditMode | null>

  constructor(private _http: HttpClient) {
    this._init()
  }

  private _init() {
    const id = localStorage.getItem('id')
    if (id && id.length !== 0) {
      this._id = id
    } else {
      this._id = uuid.v4()
      localStorage.setItem('id', this._id)
    }
    this._type = new BehaviorSubject<ItemType | null>(JSON.parse(localStorage.getItem('type') ?? 'null'))
    this._info = new BehaviorSubject<ItemInfo | null>(JSON.parse(localStorage.getItem('info') ?? 'null'))
    this._props = new BehaviorSubject<ItemProp[] | null>(JSON.parse(localStorage.getItem('props') ?? 'null'))
    this._events = new BehaviorSubject<ItemEvent[] | null>(JSON.parse(localStorage.getItem('events') ?? 'null'))

    this._propsCandidates = new BehaviorSubject<ItemProp[]>([])
    this._eventsCandidates = new BehaviorSubject<ItemEvent[]>([])
    
    this._editMode = new BehaviorSubject<EditMode | null>(JSON.parse(localStorage.getItem('editMode') ?? 'null'))

    this._type.pipe(untilDestroyed(this)).subscribe((value) => {
      localStorage.setItem('type', JSON.stringify(value))
    })
    this._info.pipe(untilDestroyed(this)).subscribe((value) => {
      localStorage.setItem('info', JSON.stringify(value))
    })
    this._props.pipe(untilDestroyed(this)).subscribe((value) => {
      localStorage.setItem('props', JSON.stringify(value))
    })
    this._events.pipe(untilDestroyed(this)).subscribe((value) => {
      localStorage.setItem('events', JSON.stringify(value))
    })

    this._editMode.pipe(untilDestroyed(this)).subscribe((value) => {
      localStorage.setItem('editMode', JSON.stringify(value))
    })
  }

  get type$() {
    return this._type.asObservable()
  }

  get info$() {
    return this._info.asObservable()
  }

  get props$() {
    return this._props.asObservable()
  }

  get events$() {
    return this._events.asObservable()
  }

  get editMode$() {
    return this._editMode.asObservable()
  }

  get propsCandidates$() {
    return this._propsCandidates.asObservable()
  }

  get eventsCandidates$() {
    return this._eventsCandidates.asObservable()
  }

  get type() {
    return this._type.value
  }

  get info() {
    return this._info.value
  }

  get props() {
    return this._props.value
  }

  get events() {
    return this._events.value
  }

  get editMode() {
    return this._editMode.value
  }

  get propsCandidates() {
    return this._propsCandidates.value
  }

  get eventsCandidates() {
    return this._eventsCandidates.value
  }

  updateType(type: ItemType) {
    this._type.next(type)
  }

  updateInfo(info: ItemInfo) {
    this._info.next(info)
  }

  updateProps(props: ItemProp[]) {
    this._props.next(props)
  }

  updateEvents(events: ItemEvent[]) {
    this._events.next(events)
  }

  updatePropsCandidates(props: ItemProp[]) {
    this._propsCandidates.next(props)
  }

  updateEventsCandidates(events: ItemEvent[]) {
    this._eventsCandidates.next(events)
  }

  updateEditMode(editMode: EditMode | null) {
    this._editMode.next(editMode)
  }

  async reset() {
    this._type.complete()
    this._info.complete()
    this._props.complete()
    this._events.complete()
    this._propsCandidates.complete()
    this._eventsCandidates.complete()
    localStorage.clear()
    await delay(500)
    this._init()
  }

  async updateKafka(): Promise<void> {
    await firstValueFrom(
      this._http
        .post(
          'https://kfk.jupiter.bavenir.eu/api/pushTds',
          {
            uuid: this._id,
            type: this._type.value?.title,
            manufacturer: this._info.value?.manufacturer,
            serialNumber: this._info.value?.serialNumber,
            properties: this._props.value?.map((prop) => {
              return {
                type: prop.propType.url,
                units: prop.unitType ?? '',
              }
            }),
          },
          {
            headers: {
              accept: 'application/json',
            },
            responseType: 'text',
          }
        )
        .pipe(take(1))
    )
  }
}
