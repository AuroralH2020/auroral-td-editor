import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FormFieldComponent),
    }
  ]
})
export class FormFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label: string = '';
  @Input() placeholder?: string;
  @Input() hint?: string;
  @Input() isSecret: boolean = false;
  @Input() leadingIcon?: string;
  @Input() leadingSpace: boolean = false;
  @Input() required: boolean = false;

  private _value: string = '';

  protected visible: boolean = true;
  protected focused: boolean = false;

  constructor() {
    return;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
  }

  get value(): string {
    return this._value;
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.visible = !this.isSecret;
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }

  setFocus(value: boolean) {
    this.focused = value;
  }

}
