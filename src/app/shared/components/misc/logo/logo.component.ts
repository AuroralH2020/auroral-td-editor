import { Component, Input, OnInit } from '@angular/core';

type Theme = 'dark' | 'light';
type Size = 'normal' | 'small';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() theme: Theme = 'dark';
  @Input() size: Size = 'normal';

  constructor() { }

  ngOnInit(): void {
  }

}
