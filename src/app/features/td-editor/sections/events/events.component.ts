import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { EditMode, ItemEvent, ItemType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { ConfirmationService } from 'primeng/api'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { Observable } from 'rxjs'
import { AddEventDialogComponent } from './add-event-dialog/add-event-dialog.component'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [DialogService, ConfirmationService],
})
export class EventsComponent {

  @Input() editMode: boolean = false
  @Input() prevRoute: string = ''

  constructor(
    private _itemsService: ItemsService,
    private _router: Router,
    private _dialogService: DialogService,
    private _confirmationService: ConfirmationService
  ) {}

  ref: DynamicDialogRef | undefined

  disabled: boolean = true

  events: ItemEvent[] = []

  ngOnInit(): void {
    this.events = this._itemsService.events ?? []
  }

  onConfirm() {
    let route = '/td-editor/sections/summary'
    let editMode = this._itemsService.editMode
    if (editMode?.active) {
      route = editMode.prevRoute
      this._itemsService.updateEditMode(null)
    }
    this._itemsService.updateEvents(this.events)
    this.disabled = true
    this._router.navigateByUrl(route)
  }

  onSkip() {
    const events = this._itemsService.events
    if (!events) {
      this._itemsService.updateEvents([])
    }
    this._router.navigateByUrl('/td-editor/sections/summary')
  }

  async openEventDialog(event?: ItemEvent) {
    this.ref = this._dialogService.open(AddEventDialogComponent, {
      height: 'calc(100vh - 80px)',
      width: '800px',
      data: { event },
    })
    this.ref.onClose.pipe(untilDestroyed(this)).subscribe((event?: ItemEvent) => this._updateEvent(event))
  }

  removeEvent(ev: Event, event: ItemEvent) {
    this._confirmationService.confirm({
      target: ev.target as EventTarget,
      message: `Are you sure that you want to delete event ${event.name}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.events = this.events.filter((element) => element.id !== event.id)
        this.disabled = false
      },
    })
  }

  private _updateEvent(event?: ItemEvent) {
    if (event) {
      let candidate = this.events.find((element) => {
        return element.id === event.id
      })
      if (candidate) {
        candidate.name = event.name
        candidate.description = event.description
        candidate.data = event.data
      } else {
        this.events.push(event)
      }
      this.disabled = false
    }
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
}
