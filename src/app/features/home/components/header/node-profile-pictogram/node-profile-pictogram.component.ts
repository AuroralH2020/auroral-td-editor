import { Component, Input, OnInit } from '@angular/core'

type Size = 'small' | 'large'

@Component({
  selector: 'app-node-profile-pictogram',
  templateUrl: './node-profile-pictogram.component.html',
  styleUrls: ['./node-profile-pictogram.component.scss'],
})
export class NodeProfilePictogramComponent implements OnInit {
  @Input() size: Size = 'small'

  constructor() {}

  ngOnInit(): void {}
}
