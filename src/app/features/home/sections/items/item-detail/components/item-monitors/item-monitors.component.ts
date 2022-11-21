import { Component, Input, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Monitor } from '@core/models/monitor.model'
import { stringSortListOfObjects } from 'src/app/utils'
import { ItemMonitorsDialogComponent } from './item-monitors-dialog/item-monitors-dialog.component'

const _N = 4

@Component({
  selector: 'app-item-monitors',
  templateUrl: './item-monitors.component.html',
  styleUrls: ['./item-monitors.component.scss'],
})
export class ItemMonitorsComponent implements OnInit {
  @Input() monitors: Monitor[] = []

  constructor(public dialog: MatDialog) {}

  private _sortMonitors() {
    stringSortListOfObjects(this.monitors, 'name')
  }

  ngOnInit(): void {
    this._sortMonitors()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ItemMonitorsDialogComponent, {
      width: '600px',
      data: this.monitors,
    })
  }

  get isTooLong(): boolean {
    return this.monitors.length > _N
  }

  get first4Monitors(): Monitor[] {
    return this.monitors.slice(0, _N)
  }

  get numberOfHiddenMonitors(): number {
    const length = this.monitors.length
    if (length <= _N) return 0
    return length - _N
  }
}
