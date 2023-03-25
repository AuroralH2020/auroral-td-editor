import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent implements OnInit {

  @Input() control: FormControl | undefined;
  @Input() label: string = '';
  @Input() placeholder?: string;
  @Input() isSecret: boolean = false;
  @Input() leadingIcon?: string;
  @Input() prefix?: string;

  protected visible: boolean = true;
  protected focused: boolean = false;

  constructor() {
    if (!this.control) {
      this.control = new FormControl('')
    }
    return;
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

  get required(): boolean {
    return this.control?.hasValidator(Validators.required) ?? false
  }

}
