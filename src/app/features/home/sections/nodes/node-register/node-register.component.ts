import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { NodesService } from '@core/services/nodes/nodes.service'
import { SnackBarService } from '@core/services/snack-bar/snack-bar.service'
import { parseURL } from 'src/app/utils'
import { Node } from '@core/models/node.model'

@Component({
  selector: 'app-node-register',
  templateUrl: './node-register.component.html',
  styleUrls: ['./node-register.component.scss'],
})
export class NodeRegisterComponent implements OnInit {
  constructor(
    private _nodeService: NodesService,
    private _snackbar: SnackBarService,
    public dialogRef: MatDialogRef<NodeRegisterComponent>
  ) {}

  loading: boolean = false

  protected form!: FormGroup
  protected name: FormControl = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'change',
  })
  protected url: FormControl = new FormControl('', {
    validators: [Validators.required],
    updateOn: 'change',
  })

  protected protocol: FormControl = new FormControl('')

  ngOnInit(): void {
    this.form = new FormGroup({
      name: this.name,
      url: this.url,
    })
  }

  async registerNode() {
    if (this.form.valid) {
      this.loading = true
      try {
        const name = this.name.value
        const base = this.url.value
        const node = await this._nodeService.registerNode({
          name: name,
          base: parseURL(base, this.protocol.value),
          timeout: undefined,
        })
        this.loading = false
        this.close(node)
        this._snackbar.showMessage('New Node registered.')
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    }
  }

  close(node?: Node): void {
    this.dialogRef.close(node)
  }
}
