import { Component, Input, OnInit } from "@angular/core";
import { Property, Event } from "@core/models/monitor.model";

interface Category {
  icon: string;
  color: string;
}

@Component({
  selector: "app-item-monitor",
  templateUrl: "./item-monitor.component.html",
  styleUrls: ["./item-monitor.component.scss"],
})
export class ItemInteractionComponent implements OnInit {
  @Input() monitor: Property | Event | undefined;
  @Input() textStyleClasses: string | undefined;

  categories: Map<string, Category> = new Map<string, Category>();

  constructor() {
    this.categories.set("EnergyProperty", {
      icon: "battery_charging_full",
      color: "#D5C740",
    });
    this.categories.set("Water", {
      icon: "water_drop",
      color: "#00B6EB",
    });
    this.categories.set("Sound", {
      icon: "volume_up",
      color: "#A25757",
    });
    this.categories.set("AmbientTemperature", {
      icon: "thermostat",
      color: "#c7b708",
    });
  }

  ngOnInit(): void {}

  get hasCategory(): boolean {
    return this.categories.has(this.monitor?.monitors ?? "");
  }

  get categoryIcon(): string {
    return this.categories.get(this.monitor?.monitors ?? "")?.icon ?? "";
  }

  get categoryColor(): string {
    return this.categories.get(this.monitor?.monitors ?? "")?.color ?? "";
  }
}
