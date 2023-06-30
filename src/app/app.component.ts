import { Component, OnInit } from '@angular/core'
import { ItemsService } from '@core/services/item/item.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading: boolean = false

  constructor(private _itemsService: ItemsService) {
    return
  }

  ngOnInit(): void {}
}
