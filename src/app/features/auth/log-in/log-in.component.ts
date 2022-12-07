import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "@core/services/user/user.service";
import { throwError } from "rxjs";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"],
})
export class LogInComponent implements OnInit {
  loading: boolean = false;

  constructor(private _router: Router, private _user: UserService) {}

  protected form!: FormGroup;
  protected username: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });
  protected password: FormControl = new FormControl("", {
    validators: Validators.required,
    updateOn: "change",
  });

  ngOnInit(): void {
    this.form = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  onLoginClick() {
    if (!this.form.valid) {
      return;
    }
    this.loading = true;
    this._user
      .login({
        username: this.form.value.username,
        password: this.form.value.password,
      })
      .then(
        (newTokens) => {
          if (newTokens) {
            // update token store
            this._user.storeTokens(newTokens);
            this._router.navigate(["/home"]);
          }
          this.loading = false;
          // no token received
          return throwError(() => "no refresh token found");
        },
        (error) => (this.loading = false)
      );
  }
}
