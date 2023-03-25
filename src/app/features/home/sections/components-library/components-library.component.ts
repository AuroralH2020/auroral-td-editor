import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { FetchTableItems } from '@shared/models/table.modele'

@Component({
  selector: 'app-components-library',
  templateUrl: './components-library.component.html',
  styleUrls: ['./components-library.component.scss'],
})
export class ComponentsLibraryComponent implements OnInit {
  protected textFieldWithError: FormControl = new FormControl('', {
    validators: Validators.required,
    updateOn: 'change',
  })

  protected textAreaWithError: FormControl = new FormControl('', {
    validators: Validators.required,
    updateOn: 'change',
  })

  protected singleSelectWithError: FormControl = new FormControl('', {
    validators: Validators.required,
    updateOn: 'change',
  })

  constructor() {}

  ngOnInit(): void {}

  getItemsForFetchTable(page: number, size: number): Promise<FetchTableItems> {
    const items = [...Array(20).keys()].map((x) => {
      return {
        name: 'Name ' + ++x,
        type: 'Type ' + x,
        owner: 'Owner ' + x,
      }
    })
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalLength: items.length,
          items: items.slice(page * size),
        })
      }, 3000)
    })
  }
}
