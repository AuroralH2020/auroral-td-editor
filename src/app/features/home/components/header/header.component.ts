import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core'
import { AdminService } from '@core/services/admin/admin.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  loading: boolean = false

  ngOnInit(): void {
    return
  }

  
}
