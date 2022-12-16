import { Component, OnInit } from '@angular/core';
import { AdminService } from '@core/services/admin/admin.service';

@Component({
  selector: 'app-re-run-discovery',
  templateUrl: './re-run-discovery.component.html',
  styleUrls: ['./re-run-discovery.component.scss']
})
export class ReRunDiscoveryComponent implements OnInit {

  loading: boolean = false

  constructor(private _admin: AdminService) { }

  ngOnInit(): void {
  }

  async refresh(): Promise<void> {
    this.loading = true
    try {
      await this._admin.refresh()
      window.location.reload()
    } finally {
      this.loading = false
    }
  }

}
