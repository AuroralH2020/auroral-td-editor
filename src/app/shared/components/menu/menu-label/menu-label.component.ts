import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-menu-label',
  templateUrl: './menu-label.component.html',
  styleUrls: ['./menu-label.component.scss'],
})
export class MenuLabelComponent implements OnInit {
  @ViewChild(TemplateRef)
  labelContent!: TemplateRef<any>

  constructor() {}

  ngOnInit(): void {}
}
