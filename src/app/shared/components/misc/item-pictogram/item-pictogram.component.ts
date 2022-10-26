import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-pictogram',
  templateUrl: './item-pictogram.component.html',
  styleUrls: ['./item-pictogram.component.scss']
})
export class ItemPictogramComponent implements OnInit {

  @Input() name: string | undefined;


icon!: string;
color!: string;

  constructor() { }

  ngOnInit(): void {
    var type = this.name?.toLocaleLowerCase()
    if (type?.includes('service')) {
      this.icon = 'cloud'
      this.color = '#E5B38E'
    } else {
      this.icon = 'router'
      this.color = '#00B6EB'
    }
  }

}
