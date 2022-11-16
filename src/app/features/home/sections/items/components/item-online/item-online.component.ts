import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-online',
  templateUrl: './item-online.component.html',
  styleUrls: ['./item-online.component.scss']
})
export class ItemOnlineComponent implements OnInit {

  @Input() online: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
