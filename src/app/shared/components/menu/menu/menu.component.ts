import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core'

type Type = 'horizontal' | 'vertical'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ContentChild('labelRef') labelRef: TemplateRef<any> | undefined
  @ContentChild('contentRef') contentRef: TemplateRef<any> | undefined

  @Input() type: Type = 'horizontal'
  @Input() options: any[] = []

  selected: any

  constructor() {}

  ngOnInit(): void {
    this.selected = this.options[0] ?? undefined
  }

  select(item: any): void {
    if (this.selected !== item) {
      this.selected = item
    }
  }
}
