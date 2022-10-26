import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.scss"],
})
export class AvatarComponent implements OnInit {
  @Input() photoUrl: string | undefined;

  @Input() name: string = "";

  @Input() size: number = 60;

  @Input() color: string = "#000";

  @Input() showTooltip: boolean = true;

  showInitials = false;
  initials: string = "";

  ngOnInit() {
    if (!this.photoUrl) {
      this.showInitials = true;
      this.createInititals();
    }
  }

  private createInititals(): void {
    let initials = "";

    for (let i = 0; i < this.name.length; i++) {
      if (this.name.charAt(i) === " ") {
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
