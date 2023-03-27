import { Component, Input, OnInit, HostBinding } from '@angular/core'

type Type = 'mat-button' | 'mat-flat-button' | 'mat-raised-button' | 'mat-stroked-button'
type Theme = 'basic' | 'primary' | 'accent' | 'warn'
type Size = 'small' | 'medium' | 'large'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() type: Type = 'mat-flat-button'
  @Input() theme: Theme = 'primary'
  @Input() size: Size = 'small'
  @Input() actionType: string = ''
  @Input() width: number | undefined

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('class')
  get hostClass(): string {
    return this.disabled ? 'disabled' : 'enabled'
  }

  get style() {
    return { width: this.width ? `${this.width}px` : '' }
  }
}
