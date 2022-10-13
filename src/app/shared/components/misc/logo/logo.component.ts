import { Component, Input, OnInit } from '@angular/core';

type IconTheme = 'dark' | 'light';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() iconTheme: IconTheme = 'light';

  constructor() { }

  ngOnInit(): void {
  }

}
