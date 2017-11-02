import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <div class="div1" fxLayout="column" fxLayoutAlign="center center">
      <img src="/assets/logo2.png">
      <br>
      <mat-card fxLayout="column" fxLayoutAlign="start stretch" fxLayoutGap="10px">
        <div class="div2" fxLayoutAlign="center center">Authenticate</div>
        <br>
        <form [formGroup]="login" (submit)="login.valid && onLogin()" fxLayout="column" fxLayoutAlign="start stretch">
          <mat-form-field [floatPlaceholder]="'never'">
            <i class="fa fa-user fa-lg"></i><input formControlName="username" matInput placeholder="...    Username">
            <mat-error>Username is required</mat-error>
          </mat-form-field>
          <mat-form-field [floatPlaceholder]="'never'">
            <i class="fa fa-unlock-alt fa-lg" aria-hidden="true"></i>
            <input formControlName="password" type="password" matInput placeholder="...    Password">
            <mat-error>Password is required</mat-error>
          </mat-form-field>
          <br>
          <button mat-raised-button [color]="'primary'" [disabled]="login.pristine||login.invalid">Login</button>
        </form>
      </mat-card>
    </div>
  `,
  styles: [`
    .div1 {
      position: absolute;
      height: 100%;
      width: 100%;
      margin-top: -8px;
      margin-left: -8px;
      background-image: url("/assets/back.jpg");
    }

    .div2 {
      font-family: 'sans-serif';
      font-size: 30px;
      font-weight: bolder;
      width: 110.7%;
      height: 90px;
      margin-top: -20%;
      margin-left: -5.4%;
      color: white;
      background-color: midnightblue;
    }

    mat-form-field {
      width: 100%;
    }

    button {
      height: 45px;
      font-family: 'sans-serif';
      font-size: 20px;
      font-weight: bolder;
    }

    mat-card {
      width: 500px;
      height: 400px;
      border: thin solid lightgrey;
    }
  `]
})
export class LoginComponent {
  login: FormGroup;

  constructor(private router: Router) {
    this.login = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onLogin() {
    console.log('name = ' + this.login.get('username').value + '  password = ' + this.login.get('password').value);
    if (this.login.get('username').value === 'Ashutosh') {
      this.router.navigate(['admin']);
    } else if (this.login.get('username').value === 'Ayush') {
      this.router.navigate(['member']);
    } else {
      this.router.navigate(['login']);
    }
  }
}

