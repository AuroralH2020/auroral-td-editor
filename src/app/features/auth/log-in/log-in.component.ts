import { Component, OnInit } from '@angular/core';

import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  filmIcon = faFilm;

  constructor() {
    return;
  }

  ngOnInit(): void {
    return;
  }

}
