import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatTab } from "@angular/material/tabs";

export enum Type {
  
}

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"],
})
export class TabComponent implements OnInit {
  @Input() label?: string;
  @Input() disabled?: boolean;
  @Input() disabledTooltip?: string;

  @ViewChild(MatTab)
  matTab: MatTab | undefined;

  constructor() {}

  ngOnInit(): void {}
}
