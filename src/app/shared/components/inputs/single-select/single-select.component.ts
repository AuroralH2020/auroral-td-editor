import { Component, ContentChild, forwardRef, Input, OnInit, TemplateRef } from '@angular/core'
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms'

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent implements OnInit {
  @Input() control: FormControl | undefined
  @Input() options: any[] = []
  @Input() label: string | undefined
  @Input() placeholder?: string
  @Input() leadingIcon?: string

  @ContentChild('detailRef') detailRef: TemplateRef<any> | undefined

  protected focused: boolean = false;

  constructor() {
    if (!this.control) {
      this.control = new FormControl('')
    }
  }

  ngOnInit(): void {
  }

  setFocus(value: boolean) {
    this.focused = value;
  }

  get required(): boolean {
    return this.control?.hasValidator(Validators.required) ?? false
  }
}
