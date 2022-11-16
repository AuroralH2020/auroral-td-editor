import { Component, Input, OnInit, HostBinding } from '@angular/core'

type ButtonType = 'mat-button' | 'mat-flat-button' | 'mat-raised-button' | 'mat-stroked-button'
type ButtonTheme = 'basic' | 'primary' | 'accent' | 'warn'
type ButtonSize = 'small' | 'medium' | 'large'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = ''
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() type: ButtonType = 'mat-flat-button'
  @Input() theme: ButtonTheme = 'primary'
  @Input() size: ButtonSize = 'small'
  @Input() actionType: string = ''

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('class')
  get hostClass(): string {
    return this.disabled ? 'disabled' : 'enabled'
  }
}
