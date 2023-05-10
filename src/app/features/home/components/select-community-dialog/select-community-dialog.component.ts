import { Component, OnInit } from '@angular/core'
import { Community } from '@core/models/collaboration.model'
import { CollaborationService } from '@core/services/collaboration/collaboration.service'
import { DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-select-community-dialog',
  templateUrl: './select-community-dialog.component.html',
  styleUrls: ['./select-community-dialog.component.scss'],
})
export class SelectCommunityDialogComponent implements OnInit {
  communities!: Community[]
  displayedCommunities!: Community[]

  constructor(private _collaborationService: CollaborationService, public ref: DynamicDialogRef) {}

  ngOnInit(): void {
    this.communities = this._collaborationService.communities ?? []
    this.displayedCommunities = this.communities
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.displayedCommunities = this.communities.filter((element) => element.name.toLowerCase().includes(searchValue))
  }

  selectCommunity(community: Community) {
    this.ref.close(community)
  }
}
