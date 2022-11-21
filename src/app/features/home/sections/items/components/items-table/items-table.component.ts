import { Component, Input, OnInit } from '@angular/core';
import { Items } from '@core/models/item.model';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {

  @Input() columns: string[] = []
  @Input() fetchItems!: (page: number, size: number) => Promise<Items>;

  constructor() { }

  ngOnInit(): void {
  }

}
