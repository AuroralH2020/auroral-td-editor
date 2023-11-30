import { Component, ViewChild } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { ItemProp, PropType, PropUnitType, PropUnitDataType, PropForm } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import lodash from 'lodash'
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete'
import { CheckboxChangeEvent } from 'primeng/checkbox'
import { OverlayPanel } from 'primeng/overlaypanel'
import { Observable } from 'rxjs'
import { apdaptersOntologyTypes, omOntologyTypes, unitDataTypes } from 'src/app/data'
import { blockWhitespaceCharsFromInput, blockUrlUnsafeCharsFromInput } from 'src/app/utils'
import * as uuid from 'uuid'

@UntilDestroy()
@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.scss'],
})
export class PropsComponent {
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
  protected unspecifiedUnitType!: FormControl

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

  allPropUnitTypes: PropUnitType[] = []
  propUnitTypes: PropUnitType[] = []

  // unspecifiedUnitType: boolean = false

  constructor(private _router: Router, private _itemsService: ItemsService, private _route: ActivatedRoute) {
    const id = this._route.snapshot.queryParams['id']
    var prop: ItemProp | null | undefined
    if (id) {
      prop = this._itemsService.propsCandidates.find((element) => {
        return element.id === id
      })
    }
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
    this.unitType = new FormControl<PropUnitType | null>(prop?.unitType ?? null, {
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
    })
    this.unspecifiedUnitType = new FormControl<boolean>(this.editMode && (prop?.unitType === undefined || prop?.unitType === null), {
      updateOn: 'change',
    })
    if (this.unspecifiedUnitType.value) {
      this.unitType.disable()
    }
    this.form = new FormGroup({
      name: this.name,
      propType: this.propType,
      unitType: this.unitType,
      unitDataType: this.unitDataType,
      description: this.description,
      forms: this.forms,
      unspecifiedUnitType: this.unspecifiedUnitType,
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
      const id = this.editMode ? this._prop!.id : uuid.v4()

      const props = lodash.cloneDeep(this.propsCandidates)

      let candidate = props.findIndex((element) => {
        return element.id === id
      })
      if (candidate >= 0) {
        props[candidate].name = this.name.value
        props[candidate].description = this.description.value
        props[candidate].propType = this.propType.value
        props[candidate].unitType = this.unitType.disabled ? null : this.unitType.value
        props[candidate].unitDataType = this.unitDataType.value
        props[candidate].forms = this.forms.value
      } else {
        props.push({
          id,
          name: this.name.value,
          description: this.description.value,
          propType: this.propType.value,
          unitType: this.unitType.disabled ? null : this.unitType.value,
          unitDataType: this.unitDataType.value,
          forms: this.forms.value,
        })
      }
      this._itemsService.updatePropsCandidates(props)
      this._router.navigateByUrl('/td-editor/sections/props')
    }
  }

  close() {
    this._router.navigateByUrl('/td-editor/sections/props')
  }

  searchPropertiesTypes(event: AutoCompleteCompleteEvent) {
    this.propTypes = this.allPropTypes.filter((element) => element.name.toLowerCase().includes(event.query.toLowerCase()))
  }

  searchPropertiesUnitTypes(event: AutoCompleteCompleteEvent) {
    this.propUnitTypes = this.allPropUnitTypes.filter((element) => element.name.toLowerCase().includes(event.query.toLowerCase()))
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
    for (const ontology of apdaptersOntologyTypes) {
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

    const propUnitTypes = []
    for (const ontology of omOntologyTypes) {
      const name = ontology.split('/').at(-1)
      if (name) {
        propUnitTypes.push({
          name,
          url: ontology,
        })
      }
    }
    this.allPropUnitTypes = propUnitTypes
    this.propUnitTypes = propUnitTypes
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

  openUrl(event: Event, url: string) {
    event.stopPropagation()
    window.open(url, '_blank')
  }

  toggleUnspecifiedUnitType(event: CheckboxChangeEvent) {
    if (event.checked) {
      this.unitType.disable()
    } else {
      this.unitType.enable()
    }
  }

  get propsCandidates$(): Observable<ItemProp[]> {
    return this._itemsService.propsCandidates$
  }

  get propsCandidates(): ItemProp[] {
    return this._itemsService.propsCandidates
  }
}
