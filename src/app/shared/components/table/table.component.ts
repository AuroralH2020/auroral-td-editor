import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActionWhenEmpty, FetchTableItems } from "@shared/models/table.modele";


@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() columns: string[] = [];
  @Input() fetchData:
    | ((page: number, size: number) => Promise<FetchTableItems>)
    | undefined;
  @Input() emptyMessage: string | undefined
  @Input() emptyAction: ActionWhenEmpty | undefined

  @ContentChild("headerCellRef") headerCellRef: TemplateRef<any> | undefined;
  @ContentChild("cellRef") cellRef: TemplateRef<any> | undefined;
  @ContentChild("detailRef") detailRef: TemplateRef<any> | undefined;

  expandedElement: any | undefined;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  isLoading = false;
  isEmpty = false;

  totalLength = 40;
  pageSize = 20;
  currentPage = 0;
  pageSizeOptions: number[] = [10, 20, 30];

  constructor() {}

  ngOnInit(): void {
    //Load initial data
    this.loadData();
  }

  test(element: any) {
    console.log(element)
  }

  loadData() {
    if (this.fetchData) {
      this.isLoading = true;
      this.fetchData(this.currentPage, this.pageSize).then(
        (data) => {
          this.dataSource.data = data.items;
          this.paginator.length = data.totalLength
          this.paginator.pageIndex = this.currentPage;
          this.isLoading = false;
          if (data.totalLength === 0) {
            this.isEmpty = true
          }
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        }
      );
    }
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }
}
