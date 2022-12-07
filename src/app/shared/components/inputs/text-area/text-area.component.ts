import { Component, Input, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  
  @Input() control: FormControl | undefined
  @Input() label: string = ''
  @Input() placeholder?: string

  protected focused: boolean = false

  constructor() {
    return
  }
  ngOnInit(): void {}

  setFocus(value: boolean) {
    this.focused = value
  }

  get required(): boolean {
    return this.control?.hasValidator(Validators.required) ?? false
  }
}
