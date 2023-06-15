import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core'

export type Size = 'normal' | 'small'
export type Shape = 'rounded' | 'square'

@Component({
  selector: 'app-pictogram',
  templateUrl: './pictogram.component.html',
  styleUrls: ['./pictogram.component.scss'],
})
export class PictogramComponent implements OnInit {

  @ContentChild('pictogramRef') pictogramRef: TemplateRef<any> | undefined

  @Input() size: Size = 'normal'
  @Input() shape: Shape = 'rounded'
  @Input() pictogramColor: string | undefined
  @Input() contentColor: string | undefined

  ngOnInit(): void {
  }
}
