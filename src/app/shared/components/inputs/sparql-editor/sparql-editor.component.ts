import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'app-sparql-editor',
  templateUrl: './sparql-editor.component.html',
  styleUrls: ['./sparql-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SparqlEditorComponent),
    },
  ],
})
export class SparqlEditorComponent implements OnInit, ControlValueAccessor, AfterViewChecked {
  private _value: string = ''

  protected focused: boolean = false

  autoResize: boolean = false

  constructor() {
    return
  }

  // Workaround to fix https://github.com/primefaces/primeng/issues/9890
  ngAfterViewChecked(): void {
    if (!this.autoResize) {
      setTimeout(()=> {
        this.autoResize = true
    }, 0);
    }
  }

  set value(value: string) {
    this._value = value
    this.onChange(value)
  }

  get value(): string {
    return this._value
  }

  onChange = (value: string) => {}
  onTouched = () => {}

  writeValue(value: string) {
    this.value = value
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn
  }

  ngOnInit(): void {}

  setFocus(value: boolean) {
    this.focused = value
  }
}
