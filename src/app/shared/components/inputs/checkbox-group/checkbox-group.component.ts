import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
})
export class CheckboxGroupComponent implements OnInit {
  constructor() {}

  selectedCities: string[] = []

  selectedCategories: any[] = ['Technology', 'Sports']

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ]

  checked: boolean = false

  ngOnInit() {
    this.selectedCategories = this.categories.slice(1, 3)
  }
}
