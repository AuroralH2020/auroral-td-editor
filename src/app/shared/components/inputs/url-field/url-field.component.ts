import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-url-field',
  templateUrl: './url-field.component.html',
  styleUrls: ['./url-field.component.scss'],
})
export class UrlFieldComponent implements OnInit {
  @Input() control: FormControl | undefined
  @Input() protocol: FormControl | undefined
  @Input() label: string = ''
  @Input() placeholder?: string

  hidePrefix: boolean = false
  selectedProtocol: string = 'http'

  constructor() {}

  ngOnInit(): void {
    if (this.control) {
      this.control.valueChanges.subscribe((x) => this._onUrlChange(x))
    }
    if (this.protocol) {
      this.protocol.setValue(this.selectProtocol)
    }
  }

  private _clearWhiteSpacesFromUrl() {
    if (!this.control?.value) {
      return
    }
    const url = this.control.value
    if (url.match(/\s/g)) {
      this.control.setValue(url.replace(/\s/g, ''))
    }
  }

  private _selectProtocol(protocol: string) {
    if (this.selectedProtocol !== protocol) {
      this.selectedProtocol = protocol
    }
    if (this.protocol) {
      this.protocol.setValue(protocol)
    }
  }

  private _onUrlChange(url: string): void {
    this._clearWhiteSpacesFromUrl()
    const http = url.startsWith('http://')
    const https = url.startsWith('https://')
    this.hidePrefix = http || https
    const protocol = https ? 'https' : 'http'
    this._selectProtocol(protocol)
  }

  selectProtocol(value: string): void {
    this._selectProtocol(value)
    if (!this.control?.value) {
      return
    }
    let url = this.control.value
    const http = url.startsWith('http://')
    const https = url.startsWith('https://')
    if (http || https) {
      url = url.replace('http://', '')
      url = url.replace('https://', '')
      this.control.setValue(value + '://' + url)
    }
  }
}
