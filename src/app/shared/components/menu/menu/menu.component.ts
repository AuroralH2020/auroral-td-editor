import { AfterContentChecked, AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { Observable, startWith, delay, map } from 'rxjs';
import { MenuItemComponent } from '../menu-item/menu-item.component';

type Type = 'horizontal' | 'vertical'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterContentInit, AfterContentChecked {
  @ContentChildren(MenuItemComponent)
  items?: QueryList<MenuItemComponent>;

  menuItems$?: Observable<MenuItemComponent[]>;

  activeItem?: MenuItemComponent;

  @Input() type: Type = 'horizontal'

  constructor() {}

  ngAfterContentInit(): void {
    if (this.items) {
      this.menuItems$ = this.items.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.items!.toArray()));
    }
    
  }

  ngAfterContentChecked() {
    //choose the default tab
    // we need to wait for a next VM turn,
    // because Tab item content, will not be initialized yet
    if (!this.activeItem) {
      const first = this.items!.first
      if (first) {
        Promise.resolve().then(() => {
          this.activeItem = first;
        });
      }
    }
  }

  selectItem(menuItem: MenuItemComponent) {
    if (this.activeItem === menuItem) {
      return;
    }

    if (this.activeItem) {
      this.activeItem.isActive = false;
    }

    this.activeItem = menuItem;

    menuItem.isActive = true;
  }

}
