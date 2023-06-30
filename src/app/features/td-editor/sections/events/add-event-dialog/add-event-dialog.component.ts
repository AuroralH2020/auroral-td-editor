import { Component, ViewChild } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ItemEvent } from '@core/models/item.model'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
import { OverlayPanel } from 'primeng/overlaypanel'
import * as uuid from 'uuid'

@UntilDestroy()
@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss'],
})
export class AddEventDialogComponent {
  @ViewChild('op') op!: OverlayPanel

  disabled: boolean = true
  editMode: boolean = false

  value: any

  private _event?: ItemEvent

  protected name!: FormControl
  protected description!: FormControl
  protected data!: FormControl

  protected form!: FormGroup

  constructor(private _ref: DynamicDialogRef, private _config: DynamicDialogConfig) {
    const event: ItemEvent | null | undefined = _config.data?.event
    if (event) {
      this.editMode = true
      this._event = event
    }
    this.name = new FormControl(
      { value: event?.name ?? '', disabled: this.editMode },
      {
        updateOn: 'change',
        validators: [Validators.required],
      }
    )
    this.description = new FormControl(event?.description ?? '', {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.data = new FormControl(event?.data ?? '', {
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
      this._ref.close({
        id: this.editMode ? this._event!.id : uuid.v4(),
        name: this.name.value,
        description: this.description.value,
        data: this.data.value,
      })
    }
  }

  close() {
    this._ref.close()
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
}
