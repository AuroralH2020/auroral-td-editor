import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DataService } from '@core/models/data-service.model'
import { DataServiceService } from '@core/services/data-service/data-service.service'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import { parseURL } from 'src/app/utils'

// {
//   "@context": ["https://www.w3.org/2019/wot/td/v1", // Harcode
//                "https://auroralh2020.github.io/auroral-ontology-contexts/core/services.json"], // Harcode

//   "title":"Tourism monitor", // Mandatory
//   "description":"Person counter", // Mandatory
//   "provider":"BOSONIT", // Mandatory
//   "status":"Available", // Optional enum (available, not available)
//   "domain":"Mobility", // Mandatory enum (Mobility,Tourism, Energy, DairyFarming, CircularEconomy)
//   "subdomain":"Fly", // Optional (free text)
//   "functionalities":"Only read", // Optional free text
//   "requirements":"The date to read the persons", // Optional free text
//   "is_free":true, // Optional true/false
//   "downloaded": 1, // Optional number
//   "version":"1.4", // Mandatory
//   "language":"spa", // Mandatory (spa, eng, svk, ...)
//   "place":"Spain", // Mandatory

//   "securityDefinitions": { "nosec_sc": { "scheme": "nosec" }}, // Harcode
//   "security": "nosec_sc ", // Harcode

@Component({
  selector: 'app-data-service-create',
  templateUrl: './data-service-create.component.html',
  styleUrls: ['./data-service-create.component.scss'],
})
export class DataServiceCreateComponent implements OnInit {
  constructor(
    private _dataService: DataServiceService,
    private _snackbar: SnackBarService,
    public dialogRef: MatDialogRef<DataServiceCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public nodes: Node[]
  ) {}

  loading: boolean = false

  protected form!: FormGroup
  protected name: FormControl = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'change',
  })
  protected description: FormControl = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'change',
  })
  protected url: FormControl = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'change',
  })
  protected protocol: FormControl = new FormControl('')

  protected node: FormControl = new FormControl(undefined, {
    validators: [Validators.required],
    updateOn: 'change',
  })

  ngOnInit(): void {
    this.form = new FormGroup({
      name: this.name,
      description: this.description,
      url: this.url,
      node: this.node,
    })
  }

  async createDataService() {
    if (this.form.valid) {
      this.loading = true
      try {
        const name = this.name.value
        const description = this.description.value
        const base = this.url.value
        const node = this.node.value
        const dataService = await this._dataService.createDataService({
          name: name,
          description: description,
          base: parseURL(base, this.protocol.value),
          node: node,
        })
        this.loading = false
        this.close(dataService)
        this._snackbar.showMessage('New Data Service created.')
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    }
  }

  close(dataService?: DataService): void {
    this.dialogRef.close(dataService)
  }
}
