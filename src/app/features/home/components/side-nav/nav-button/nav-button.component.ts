import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  @Input() path: string = '';
  @Input() name: string | undefined;
  @Input() icon: string | undefined;

  constructor(protected router: Router) { }

  ngOnInit(): void {
    return;
  }

  get isActive(): boolean {
    return this.router.url === this.path;
  }

}
