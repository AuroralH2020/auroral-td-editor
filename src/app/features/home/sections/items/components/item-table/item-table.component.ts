import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core'
import { ItemUI } from '@core/models/item.model'
import { Table } from 'primeng/table'

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss'],
})
export class ItemTableComponent {
  @ViewChild('dt') dt!: Table
  selectedFilter: string = 'All'

  @ContentChild('tableControlRef') tableControlRef: TemplateRef<any> | undefined
  @Input() itemsUI: ItemUI[] = []
  @Input() showSearch: boolean = true
  @Input() showTable: boolean = true
  @Input() loadingData: boolean = false
  @Input() linkToDetail!: string
  @Input() state: any

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value
    this.dt.filter(searchValue, 'name', 'contains')
  }

  filter() {
    if (this.selectedFilter === 'All') {
      this.dt.reset()
    } else {
      this.dt.filter(this.selectedFilter, 'type', 'equals')
    }
  }

  combineState(item: ItemUI) {
    return { item, ...this.state }
  }
}
