import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() photoUrl: string | undefined

  @Input() name: string = ''

  @Input() size: number = 60

  @Input() showTooltip: boolean = true

  @Input() colorHash: string | undefined

  showInitials = false
  initials: string = ''

  private _baseColor!: _Color

  color!: string
  contrast!: string
  fontColor!: string

  ngOnInit() {
    this._baseColor = _generateAvatarColor(this.colorHash ?? this.name)
    this.color = _rgbaToHex(this._baseColor, 0.4)
    this.contrast = _rgbaToHex(this._baseColor, 0.2)
    this.fontColor = _rgbaToHex(this._baseColor, 1.0)

    if (!this.photoUrl) {
      this.showInitials = true
      this.createInititals()
    }
  }

  get background() {
    return `radial-gradient(${this.contrast}, ${this.color})`
  }

  private createInititals(): void {
    let initials = ''

    for (let i = 0; i < this.name.length; i++) {
      if (this.name.charAt(i) === ' ') {
        continue
      }

      if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()) {
        initials += this.name.charAt(i)

        if (initials.length == 2) {
          break
        }
      }
    }

    this.initials = initials
  }
}

interface _Color {
  r: number
  g: number
  b: number
}

function _stringToIntHash(str: string, offset: number) {
  let result = 0
  for (let i = 0; i < str.length; i++) {
    result = result + str.charCodeAt(i)
  }

  const lowerbound = 0
  const upperbound = 127 + offset

  return (result % (upperbound - lowerbound)) + lowerbound
}

function _generateAvatarColor(salt: string): _Color {
  const r = _stringToIntHash(salt, 20)
  const g = _stringToIntHash(salt, 40)
  const b = _stringToIntHash(salt, 60)
  return { r, g, b }
}

function _rgbaToHex(color: _Color, alpha: number) {
  const r = color.r.toString(16)
  const g = color.g.toString(16)
  const b = color.b.toString(16)
  const a = Math.round(alpha * 255).toString(16)

  var rStr, gStr, bStr, aStr

  rStr = r.length == 1 ? '0' + r: r
  gStr = g.length == 1 ? '0' + g: g
  bStr = b.length == 1 ? '0' + b: b
  aStr = a.length == 1 ? '0' + a: a

  return '#' + rStr + gStr + bStr + aStr
}
