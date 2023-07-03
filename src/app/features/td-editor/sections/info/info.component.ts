import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { EditMode, ItemDomain, ItemInfo, ItemLocation, ItemType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { LocationService } from '@core/services/location/location.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete'
import { CheckboxChangeEvent } from 'primeng/checkbox'
import { Observable } from 'rxjs'
import { itemDomains } from 'src/app/data'
import { blockUrlUnsafeCharsFromInput } from 'src/app/utils'

@UntilDestroy()
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  blockSpace: RegExp = /[^s]/

  @Input() editMode: boolean = false
  @Input() prevRoute: string = ''

  disabled: boolean = true

  locations: any[] = []

  value: any

  protected title!: FormControl
  protected domain!: FormControl
  protected version!: FormControl
  protected description!: FormControl
  protected manufacturer!: FormControl
  protected model!: FormControl
  protected serialNumber!: FormControl
  protected location!: FormControl
  protected form!: FormGroup

  constructor(private _itemsService: ItemsService, private _locationService: LocationService, private _router: Router) {
    const info = _itemsService.info
    this.value = info
    this.title = new FormControl(info?.title, {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.domain = new FormControl<ItemDomain | null>(info?.domain ?? null, {
      updateOn: 'change',
      validators: [Validators.required],
    })
    // this.version = new FormControl(
    //   { value: info?.version, disabled: false },
    //   {
    //     updateOn: 'change',
    //     validators: [Validators.required],
    //   }
    // )
    this.description = new FormControl(info?.description, {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.manufacturer = new FormControl(
      { value: info?.manufacturer, disabled: false },
      {
        updateOn: 'change',
        validators: [Validators.required],
      }
    )
    this.model = new FormControl(
      { value: info?.model, disabled: false },
      {
        updateOn: 'change',
        validators: [Validators.required],
      }
    )
    this.serialNumber = new FormControl(
      { value: info?.serialNumber, disabled: false },
      {
        updateOn: 'change',
        validators: [Validators.required],
      }
    )
    this.location = new FormControl<ItemLocation | null>(
      { value: info?.location ?? null, disabled: false },
      {
        updateOn: 'change',
        validators: [Validators.required],
      }
    )
    this.form = new FormGroup({
      title: this.title,
      domain: this.domain,
      // version: this.version,
      description: this.description,
      manufacturer: this.manufacturer,
      model: this.model,
      serialNumber: this.serialNumber,
      location: this.location,
    })
  }

  ngOnInit(): void {
    this.disabled = !this.form.valid
    this._onChanges()
  }

  onConfirm() {
    if (this.form.valid) {
      this._itemsService.updateInfo({
        title: this.value.title,
        domain: this.value.domain,
        description: this.value.description,
        manufacturer: this.value.manufacturer,
        model: this.value.model,
        serialNumber: this.value.serialNumber,
        location: this.value.location,
      })
      let route = '/td-editor/sections/props'
      let editMode = this._itemsService.editMode
      if (editMode?.active) {
        route = editMode.prevRoute
        this._itemsService.updateEditMode(null)
      }
      this._router.navigateByUrl(route)
    }
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

  async searchLocation(event: AutoCompleteCompleteEvent) {
    if (event.query.length >= 3) {
      this.locations = await this._locationService.getLocations(event.query)
    } else {
      this.locations = []
    }
  }

  toggleUnknownVersion(event: CheckboxChangeEvent) {
    if (event.checked) {
      this.version.disable()
    } else {
      this.version.enable()
    }
  }

  toggleUnknownManufac(event: CheckboxChangeEvent) {
    if (event.checked) {
      this.manufacturer.disable()
    } else {
      this.manufacturer.enable()
    }
  }

  toggleUnknownSN(event: CheckboxChangeEvent) {
    if (event.checked) {
      this.serialNumber.disable()
    } else {
      this.serialNumber.enable()
    }
  }

  toggleUnknownModel(event: CheckboxChangeEvent) {
    if (event.checked) {
      this.model.disable()
    } else {
      this.model.enable()
    }
  }

  toggleUnknownLocation(event: CheckboxChangeEvent) {
    if (event.checked) {
      this.location.disable()
    } else {
      this.location.enable()
    }
  }

  blockUrlUnsafe(event: Event) {
    blockUrlUnsafeCharsFromInput(event)
  }

  get type$(): Observable<ItemType | null> {
    return this._itemsService.type$
  }

  get info$(): Observable<ItemInfo | null> {
    return this._itemsService.info$
  }

  get editMode$(): Observable<EditMode | null> {
    return this._itemsService.editMode$
  }

  get domains(): ItemDomain[] {
    return itemDomains
  }
}
