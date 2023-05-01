import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MyNode, MyOrgNode } from '@core/models/node.model'
import { ItemsService } from '@core/services/item/item.service'
import { NodesService } from '@core/services/nodes/nodes.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-node-query',
  templateUrl: './node-query.component.html',
  styleUrls: ['./node-query.component.scss'],
})
export class NodeQueryComponent implements OnInit {
  @ViewChild('result') result!: ElementRef

  loading: boolean = false

  queryResult: any

  constructor(private _nodesService: NodesService) {}

  protected form!: FormGroup
  protected query: FormControl = new FormControl('', {
    updateOn: 'change',
  })

  ngOnInit(): void {
    this.form = new FormGroup({
      query: this.query,
    })
  }

  ngOnDestroy() {}

  async executeQuery() {
    if (this.invalidQuery) {
      return
    }
    const query = this.form.value.query
    try {
      this.loading = true
      this.queryResult = await this._nodesService.queryLocalNode(query)
      this._scrollToResult()
    } finally {
      this.loading = false
    }
  }

  private _scrollToResult() {
    const element = this.result
    setTimeout(function () {
      element.nativeElement.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  get invalidQuery(): boolean {
    const value = this.form.value.query
    if (!this.form.valid) {
      return true
    }
    if (!value || value.length === 0) {
      return true
    }
    return false
  }
}
