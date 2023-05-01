import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyOrgNode } from '@core/models/node.model';
import { NodesService } from '@core/services/nodes/nodes.service';

@Component({
  selector: 'app-my-org-query',
  templateUrl: './my-org-query.component.html',
  styleUrls: ['./my-org-query.component.scss']
})
export class MyOrgQueryComponent implements OnInit {

  @ViewChild('result') result!: ElementRef

  loading: boolean = false

  queryResult: any

  myOrgNodes: MyOrgNode[] = []

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
      const agids = this._nodesService.myOrgNodes.map((element) => {
        return element.agid
      })
      this.queryResult = await this._nodesService.queryRemoteNodes(agids, query)
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

  get organisation(): string {
    return this._nodesService.myNode.organisation
  }

}
