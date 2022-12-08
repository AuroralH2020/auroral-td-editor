import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { ActionWhenEmpty, FetchTableItems } from '@shared/models/table.modele'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator

  @Input() columns: string[] = []
  @Input() fetchData: ((page: number, size: number) => Promise<FetchTableItems>) | undefined
  @Input() data: any[] | MatTableDataSource<any> | undefined
  @Input() emptyMessage: string | undefined

  @ContentChild('emptyRef') emptyRef: TemplateRef<any> | undefined

  @ContentChild('headerCellRef') headerCellRef: TemplateRef<any> | undefined
  @ContentChild('cellRef') cellRef: TemplateRef<any> | undefined
  @ContentChild('detailRef') detailRef: TemplateRef<any> | undefined

  expandedElement: any | undefined
  dataSource: MatTableDataSource<any> = new MatTableDataSource()

  isLoading = false

  totalLength = 40
  pageSize = 20
  currentPage = 0
  pageSizeOptions: number[] = [10, 20, 30]

  constructor() {}

  ngOnInit(): void {
    this.loadData()
  }

  get isEmpty(): boolean {
    if (this.fetchData) {
      return this.paginator && this.paginator.length === 0
    }
    return this.dataSource.data.length === 0
  }

  async loadData() {
    if (this.fetchData) {
      this.isLoading = true
      try {
        const data = await this.fetchData(this.currentPage, this.pageSize)
        this.dataSource.data = data.items
        this.paginator.length = data.totalLength
        this.paginator.pageIndex = this.currentPage
      } catch (err) {
        this.paginator.length = this.dataSource.data?.length ?? 0
        this.paginator.pageIndex = this.currentPage
      } finally {
        this.isLoading = false
      }
    } else if (this.data) {
      if (this.data instanceof MatTableDataSource) {
        this.dataSource = this.data
      } else {
        this.dataSource.data = this.data
      }
    }
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize
    this.currentPage = event.pageIndex
    this.loadData()
  }

  expand(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element
  }
}
