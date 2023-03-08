import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from '@core/models/organisation.model';

@Component({
  selector: 'app-item-owner',
  templateUrl: './item-owner.component.html',
  styleUrls: ['./item-owner.component.scss']
})
export class ItemOwnerComponent implements OnInit {

  @Input() owner: Organisation | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
