import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-photo',
  templateUrl: './avatar-photo.component.html',
  styleUrls: ['./avatar-photo.component.scss'],
})
export class AvatarPhotoComponent implements OnInit {

  @Input()
  public photoUrl: string | undefined;

  @Input()
  public name: string = '';

  @Input()
  public size: number = 60;

  @Input()
  public color: string = '#000';

  public showInitials = false;
  public initials: string = '';

  ngOnInit() {
    console.log(this.photoUrl)
    if (!this.photoUrl) {
      this.showInitials = true;
      this.createInititals();
    }

  }

  private createInititals(): void {
    let initials = "";

    for (let i = 0; i < this.name.length; i++) {
      if (this.name.charAt(i) === ' ') {
        continue;
      }

      if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()) {
        initials += this.name.charAt(i);

        if (initials.length == 2) {
          break;
        }
      }
    }

    this.initials = initials;
  }
}