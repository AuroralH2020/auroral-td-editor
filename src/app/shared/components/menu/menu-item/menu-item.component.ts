import { Component, ContentChild, Input, OnInit } from '@angular/core'
import { MenuContentComponent } from '../menu-content/menu-content.component'
import { MenuLabelComponent } from '../menu-label/menu-label.component'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() label!: string

  @Input() isActive: boolean = false

  @ContentChild(MenuContentComponent) bodyComponent!: MenuContentComponent

  @ContentChild(MenuLabelComponent) labelComponent!: MenuLabelComponent

  constructor() {}

  ngOnInit(): void {}
}
