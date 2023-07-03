import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EditMode, ItemProp, ItemType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { AddPropDialogComponent } from './add-prop-dialog/add-prop-dialog.component'
import { Observable } from 'rxjs'
import { ConfirmationService } from 'primeng/api'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import * as lodash from "lodash";

@UntilDestroy()
@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.scss'],
  providers: [DialogService, ConfirmationService],
})
export class PropsComponent implements OnInit {
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

  props: ItemProp[] = []

  ngOnInit(): void {
    this.props = lodash.cloneDeep(this._itemsService.props) ?? []
  }

  onConfirm() {
    let route = '/td-editor/sections/events'
    let editMode = this._itemsService.editMode
    if (editMode?.active) {
      route = editMode.prevRoute
      this._itemsService.updateEditMode(null)
    }
    this._itemsService.updateProps(this.props)
    this.disabled = true
    this._router.navigateByUrl(route)
  }

  onSkip() {
    const props = this._itemsService.props
    if (!props) {
      this._itemsService.updateProps([])
    }
    this._router.navigateByUrl('/td-editor/sections/events')
  }

  async openPropDialog(prop?: ItemProp) {
    this.ref = this._dialogService.open(AddPropDialogComponent, {
      height: 'calc(100vh - 80px)',
      width: '800px',
      data: { prop },
    })
    this.ref.onClose.pipe(untilDestroyed(this)).subscribe((prop?: ItemProp) => this._updateProp(prop))
  }

  removeProp(event: Event, prop: ItemProp) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Are you sure that you want to delete property ${prop.name}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.props = this.props.filter((element) => element.id !== prop.id)
        this.disabled = false
      },
    })
  }

  private _updateProp(prop?: ItemProp) {
    if (prop) {
      let candidate = this.props.find((element) => {
        return element.id === prop.id
      })
      if (candidate) {
        candidate.name = prop.name
        candidate.description = prop.description
        candidate.propType = prop.propType
        candidate.unitType = prop.unitType
        candidate.unitDataType = prop.unitDataType
        candidate.forms = prop.forms
      } else {
        this.props.push(prop)
      }
      this.disabled = false
    }
  }

  get type$(): Observable<ItemType | null> {
    return this._itemsService.type$
  }

  get props$(): Observable<ItemProp[] | null> {
    return this._itemsService.props$
  }

  get editMode$(): Observable<EditMode | null> {
    return this._itemsService.editMode$
  }
}
