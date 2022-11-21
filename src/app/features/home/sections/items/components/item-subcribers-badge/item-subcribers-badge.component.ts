import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-subcribers-badge',
  templateUrl: './item-subcribers-badge.component.html',
  styleUrls: ['./item-subcribers-badge.component.scss']
})
export class ItemSubcribersBadgeComponent implements OnInit {

  @Input() count: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
