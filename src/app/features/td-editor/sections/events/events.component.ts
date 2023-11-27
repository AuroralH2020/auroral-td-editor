import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { EditMode, ItemEvent, ItemType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { ConfirmationService } from 'primeng/api'
import { Observable } from 'rxjs'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import * as lodash from "lodash";
import { deepEqual } from 'src/app/utils'

@UntilDestroy()
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [ConfirmationService],
})
export class EventsComponent {

  @Input() editMode: boolean = false
  @Input() prevRoute: string = ''

  constructor(
    private _itemsService: ItemsService,
    private _router: Router,
    private _confirmationService: ConfirmationService
  ) {}

  disabled: boolean = true

  ngOnInit(): void {
    this._itemsService.updateEventsCandidates(lodash.cloneDeep(this._itemsService.events) ?? [])
    this._itemsService.eventsCandidates$.pipe(untilDestroyed(this)).subscribe((value) => {
      const e1 = this._itemsService.events
      const e2 = this._itemsService.eventsCandidates
      if ((e1 === undefined || e1 === null) && e2 && e2.length === 0) {
        this.disabled = true
        return
      }
      if (!deepEqual(e1, e2)) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    })
  }

  onConfirm() {
    let route = '/td-editor/sections/summary'
    let editMode = this._itemsService.editMode
    if (editMode?.active) {
      route = editMode.prevRoute
      this._itemsService.updateEditMode(null)
    }
    this._itemsService.updateEvents(this._itemsService.eventsCandidates)
    this.disabled = true
    this._router.navigateByUrl(route)
  }

  onSkip() {
    this._router.navigateByUrl('/td-editor/sections/summary')
  }

  async openEventDetail(event?: ItemEvent) {
    if (event) {
      this._router.navigateByUrl('/add-detail/sections/events?id=' + event.id)
    } else {
      this._router.navigateByUrl('/add-detail/sections/events')
    }
  }

  removeEvent(ev: Event, event: ItemEvent) {
    this._confirmationService.confirm({
      target: ev.target as EventTarget,
      message: `Are you sure that you want to delete event ${event.name}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const events = this._itemsService.eventsCandidates.filter((element) => element.id !== event.id)
        this._itemsService.updateEventsCandidates(events)
      },
    })
  }

  get type$(): Observable<ItemType | null> {
    return this._itemsService.type$
  }

  get events$(): Observable<ItemEvent[] | null> {
    return this._itemsService.events$
  }

  get editMode$(): Observable<EditMode | null> {
    return this._itemsService.editMode$
  }

  get eventsCandidates$(): Observable<ItemEvent[]> {
    return this._itemsService.eventsCandidates$
  }
}
