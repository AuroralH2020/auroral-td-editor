import { Component, OnInit } from '@angular/core';
import { PartnerUI } from '@core/models/collaboration.model';
import { CollaborationService } from '@core/services/collaboration/collaboration.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-select-partner-dialog',
  templateUrl: './select-partner-dialog.component.html',
  styleUrls: ['./select-partner-dialog.component.scss']
})
export class SelectPartnerDialogComponent  implements OnInit {
  partners!: PartnerUI[]
  displayedPartners!: PartnerUI[]

  constructor(private _collaborationService: CollaborationService, public ref: DynamicDialogRef) {}

  ngOnInit(): void {
    this.partners = this._collaborationService.partnerships ?? []
    this.displayedPartners = this.partners
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.displayedPartners = this.partners.filter((element) => element.name.toLowerCase().includes(searchValue))
  }

  selectPartner(partner: PartnerUI) {
    this.ref.close(partner)
  }
}
