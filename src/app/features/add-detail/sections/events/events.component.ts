import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemEvent } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable } from 'rxjs'
import lodash from 'lodash'
import * as uuid from 'uuid'

@UntilDestroy()
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  disabled: boolean = true
  editMode: boolean = false

  value: any

  private _event?: ItemEvent

  protected name!: FormControl
  protected description!: FormControl
  protected data!: FormControl

  protected form!: FormGroup

  constructor(private _router: Router, private _itemsService: ItemsService, private _route: ActivatedRoute) {
    const id = this._route.snapshot.queryParams['id']
    var evnt: ItemEvent | null | undefined
    if (id) {
      evnt = this._itemsService.eventsCandidates.find((element) => {
        return element.id === id
      })
    }
    if (evnt) {
      this.editMode = true
      this._event = evnt
    }
    this.name = new FormControl(
      { value: evnt?.name ?? '', disabled: this.editMode },
      {
        updateOn: 'change',
        validators: [Validators.required],
      }
    )
    this.description = new FormControl(evnt?.description ?? '', {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.data = new FormControl(evnt?.data ?? '', {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.form = new FormGroup({
      name: this.name,
      description: this.description,
      data: this.data,
    })
  }

  ngOnInit(): void {
    this._onChanges()
  }

  onConfirm() {
    if (this.form.valid) {
      const id = this.editMode ? this._event!.id : uuid.v4()

      const evnts = lodash.cloneDeep(this.eventsCandidates)

      let candidate = evnts.find((element) => {
        return element.id === id
      })
      if (candidate) {
        candidate.name = this.name.value
        candidate.description = this.description.value
        candidate.data = this.data.value
      } else {
        evnts.push({
          id,
          name: this.name.value,
          description: this.description.value,
          data: this.data.value,
        })
      }
      this._itemsService.updateEventsCandidates(evnts)
      this._router.navigateByUrl('/td-editor/sections/events')
    }
  }

  close() {
    this._router.navigateByUrl('/td-editor/sections/events')
  }

  private _onChanges(): void {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      this.value = value
      if (this.disabled && this.form.valid) {
        this.disabled = false
      } else if (!this.disabled && !this.form.valid) {
        this.disabled = true
      }
    })
  }

  get eventsCandidates$(): Observable<ItemEvent[]> {
    return this._itemsService.eventsCandidates$
  }

  get eventsCandidates(): ItemEvent[] {
    return this._itemsService.eventsCandidates
  }
}
