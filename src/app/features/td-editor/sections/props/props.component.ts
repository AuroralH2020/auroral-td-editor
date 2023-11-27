import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { EditMode, ItemProp, ItemType } from '@core/models/item.model'
import { ItemsService } from '@core/services/item/item.service'
import { Observable } from 'rxjs'
import { ConfirmationService } from 'primeng/api'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import * as lodash from "lodash";
import { deepEqual } from 'src/app/utils'

@UntilDestroy()
@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.scss'],
  providers: [ConfirmationService],
})
export class PropsComponent implements OnInit {
  @Input() editMode: boolean = false
  @Input() prevRoute: string = ''

  constructor(
    private _itemsService: ItemsService,
    private _router: Router,
    private _confirmationService: ConfirmationService
  ) {}

  disabled: boolean = true

  ngOnInit(): void {
    this._itemsService.updatePropsCandidates(lodash.cloneDeep(this._itemsService.props) ?? [])
    this._itemsService.propsCandidates$.pipe(untilDestroyed(this)).subscribe((value) => {
      const p1 = this._itemsService.props
      const p2 = this._itemsService.propsCandidates
      if ((p1 === undefined || p1 === null) && p2 && p2.length === 0) {
        this.disabled = true
        return
      }
      if (!deepEqual(p1, p2)) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    })
  }

  onConfirm() {
    let route = '/td-editor/sections/events'
    let editMode = this._itemsService.editMode
    if (editMode?.active) {
      route = editMode.prevRoute
      this._itemsService.updateEditMode(null)
    }
    this._itemsService.updateProps(this._itemsService.propsCandidates)
    this.disabled = true
    this._router.navigateByUrl(route)
  }

  onSkip() {
    this._router.navigateByUrl('/td-editor/sections/events')
  }

  async openPropDetail(prop?: ItemProp) {
    if (prop) {
      this._router.navigateByUrl('/add-detail/sections/props?id=' + prop.id)
    } else {
      this._router.navigateByUrl('/add-detail/sections/props')
    }
  }

  removeProp(event: Event, prop: ItemProp) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Are you sure that you want to delete property ${prop.name}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const props = this._itemsService.propsCandidates.filter((element) => element.id !== prop.id)
        this._itemsService.updatePropsCandidates(props)
      },
    })
  }

  get type$(): Observable<ItemType | null> {
    return this._itemsService.type$
  }

  get props$(): Observable<ItemProp[] | null> {
    return this._itemsService.props$
  }

  get propsCandidates$(): Observable<ItemProp[]> {
    return this._itemsService.propsCandidates$
  }

  get editMode$(): Observable<EditMode | null> {
    return this._itemsService.editMode$
  }
}
