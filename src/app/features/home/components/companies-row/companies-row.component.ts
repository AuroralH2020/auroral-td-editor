import { Component, Input, OnInit } from "@angular/core";
import { Organisation } from "@core/models/organisation.model";
import { generateRandomColor } from "src/app/utils";

@Component({
  selector: "app-companies-row",
  templateUrl: "./companies-row.component.html",
  styleUrls: ["./companies-row.component.scss"],
})
export class CompaniesRowComponent implements OnInit {
  @Input() companies: Organisation[] = [];

  constructor() {}

  ngOnInit(): void {
    this.companies.forEach((company) => {
      company.color = generateRandomColor();
    });
  }
}
