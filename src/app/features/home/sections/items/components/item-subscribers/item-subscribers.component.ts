import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from '@core/models/organisation.model';
import { generateRandomColor } from 'src/app/utils';

@Component({
  selector: 'app-item-subscribers',
  templateUrl: './item-subscribers.component.html',
  styleUrls: ['./item-subscribers.component.scss']
})
export class ItemSubscribersComponent implements OnInit {

  @Input() companies: Organisation[] = [];

  constructor() {}

  ngOnInit(): void {
    this.companies.forEach((company) => {
      company.color = generateRandomColor();
    });
  }

}
