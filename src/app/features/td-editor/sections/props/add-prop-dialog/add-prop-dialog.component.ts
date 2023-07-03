import { Component, OnInit, ViewChild } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ItemProp, PropForm, PropType, PropUnitDataType } from '@core/models/item.model'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
import { KeyFilter } from 'primeng/keyfilter'
import { OverlayPanel } from 'primeng/overlaypanel'
import { ontologies, unitDataTypes } from 'src/app/data'
import { blockUrlUnsafeCharsFromInput, blockWhitespaceCharsFromInput } from 'src/app/utils'
import * as uuid from 'uuid'

@UntilDestroy()
@Component({
  selector: 'app-add-prop-dialog',
  templateUrl: './add-prop-dialog.component.html',
  styleUrls: ['./add-prop-dialog.component.scss'],
})
export class AddPropDialogComponent implements OnInit {
  @ViewChild('op') op!: OverlayPanel
  @ViewChild('op1') op1!: OverlayPanel

  disabled: boolean = true
  editMode: boolean = false

  value: any

  private _prop?: ItemProp

  protected name!: FormControl
  protected propType!: FormControl
  protected unitType!: FormControl
  protected unitDataType!: FormControl
  protected description!: FormControl
  protected forms!: FormControl

  protected form!: FormGroup

  protected customTypeName: FormControl = new FormControl('', {
    updateOn: 'change',
    validators: [Validators.required],
  })
  protected customTypeUrl: FormControl = new FormControl('', {
    updateOn: 'change',
    validators: [Validators.required],
  })

  protected customTypeForm!: FormGroup

  protected newFormUrl: FormControl = new FormControl('', {
    updateOn: 'change',
    validators: [Validators.required],
  })
  protected newFormType: FormControl = new FormControl('readproperty', {
    updateOn: 'change',
    validators: [Validators.required],
  })

  protected newFormForm!: FormGroup

  allPropTypes: PropType[] = []
  propTypes: PropType[] = []

  constructor(private _ref: DynamicDialogRef, private _config: DynamicDialogConfig) {
    const prop: ItemProp | null | undefined = _config.data?.prop
    if (prop) {
      this.editMode = true
      this._prop = prop
    }
    this.name = new FormControl(
      { value: prop?.name ?? '', disabled: this.editMode },
      {
        updateOn: 'change',
        validators: [Validators.required],
      }
    )
    this.propType = new FormControl<PropType | null>(prop?.propType ?? null, {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.unitType = new FormControl(prop?.unitType ?? '', {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.unitDataType = new FormControl<PropUnitDataType | null>(prop?.unitDataType ?? null, {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.description = new FormControl(prop?.description ?? '', {
      updateOn: 'change',
    })
    this.forms = new FormControl<PropForm[]>(prop?.forms ?? [], {
      updateOn: 'change',
      validators: [Validators.required],
    })
    this.form = new FormGroup({
      name: this.name,
      propType: this.propType,
      unitType: this.unitType,
      unitDataType: this.unitDataType,
      description: this.description,
      forms: this.forms,
    })
    this.customTypeForm = new FormGroup({
      customTypeName: this.customTypeName,
      customTypeUrl: this.customTypeUrl,
    })
    this.newFormForm = new FormGroup({
      newFormUrl: this.newFormUrl,
      newFormType: this.newFormType,
    })
    this._loadOntologies()
  }

  ngOnInit(): void {
    this._onChanges()
  }

  onConfirm() {
    if (this.form.valid) {
      this._ref.close({
        id: this.editMode ? this._prop!.id : uuid.v4(),
        name: this.name.value,
        propType: this.propType.value,
        unitType: this.unitType.value,
        unitDataType: this.unitDataType.value,
        description: this.description.value,
        forms: this.forms.value,
      })
    }
  }

  close() {
    this._ref.close()
  }

  searchPropertiesTypes(event: AutoCompleteCompleteEvent) {
    this.propTypes = this.allPropTypes.filter((element) =>
      element.name.toLowerCase().includes(event.query.toLowerCase())
    )
  }

  addCustomType() {
    if (this.customTypeForm.valid) {
      const name = this.customTypeName.value
      const url = this.customTypeUrl.value
      const customPropType: PropType = {
        name,
        url,
      }
      this.allPropTypes.push(customPropType)
      this.propType.setValue(customPropType)
      this.customTypeName.setValue('')
      this.customTypeUrl.setValue('')
      this.op.hide()
    }
  }

  addNewForm() {
    if (this.newFormForm.valid) {
      const url = this.newFormUrl.value
      const type = this.newFormType.value
      let forms = this.forms.value
      const newForm: PropForm = {
        id: uuid.v4(),
        url,
        type,
      }
      forms.push(newForm)
      this.forms.setValue(forms)
      this.newFormUrl.setValue('')
      this.newFormType.setValue('')
      this.op1.hide()
    }
  }

  removeForm(form: PropForm) {
    let forms = this.forms.value
    forms = forms.filter((element: PropForm) => element.id !== form.id)
    this.forms.setValue(forms)
  }

  private _loadOntologies() {
    const propTypes = []
    for (const ontology of ontologies) {
      const name = ontology.split('#').at(-1)
      if (name) {
        propTypes.push({
          name,
          url: ontology,
        })
      }
    }
    propTypes.unshift({
      name: 'Unknown',
      url: 'Select this if you want to edit the type later',
    })
    this.allPropTypes = propTypes
    this.propTypes = propTypes
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

  get unitDataTypes(): PropUnitDataType[] {
    return unitDataTypes
  }

  blockWhitespace(event: Event) {
    blockWhitespaceCharsFromInput(event)
  }

  blockUrlUnsafe(event: Event) {
    blockUrlUnsafeCharsFromInput(event)
  }
}
