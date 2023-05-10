import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss']
})
export class MenuContentComponent implements OnInit {

  @ViewChild(TemplateRef)
  bodyContent!: TemplateRef<any>

  constructor() {}

  ngOnInit(): void {}

}
