import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MatTab, MatTabGroup, MAT_TABS_CONFIG } from "@angular/material/tabs";
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: "app-tab-group",
  templateUrl: "./tab-group.component.html",
  styleUrls: ["./tab-group.component.scss"],
  providers: [
    { provide: MAT_TABS_CONFIG, useValue: { animationDuration: "0ms" } },
  ],
})
export class TabGroupComponent implements OnInit {
  @ViewChild(MatTabGroup)
  public tabGroup: MatTabGroup | undefined;

  @ContentChildren(TabComponent)
  protected tabs: QueryList<TabComponent> | undefined;

  public ngAfterViewInit() {
    if (this.tabs && this.tabGroup) {
      const matTabsFromQueryList = this.tabs.map((tab) => tab.matTab);
      const list = new QueryList<MatTab>();
      list.reset([matTabsFromQueryList]);
      this.tabGroup._allTabs = list;
      this.tabGroup.ngAfterContentInit();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
