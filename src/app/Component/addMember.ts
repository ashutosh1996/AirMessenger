import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-addmember',
  template: `
    <div class="div1" fxLayout="column" fxLayoutAlign="center center">
      <button mat-raised-button (click)="goBack()" fxFlexAlign="start" color="accent">Back</button>
      <mat-card fxLayout="column" fxLayoutAlign="start stretch" fxLayoutGap="10px">
        <div class="div2" fxLayoutAlign="center center">Add Member</div>
        <br>
        <form [formGroup]="member" (submit)="member.valid && onSubmit()" fxLayout="column" fxLayoutAlign="start stretch">
          <mat-form-field [floatPlaceholder]="'never'">
            <i class="fa fa-user fa-lg"></i>
            <input formControlName="username" matInput placeholder="...  Username">
            <mat-error>Username is required</mat-error>
          </mat-form-field>
          <mat-form-field [floatPlaceholder]="'never'">
            <i class="fa fa-unlock-alt fa-lg"></i>
            <input formControlName="password" matInput placeholder="...  Password">
            <mat-error>Password is required</mat-error>
          </mat-form-field>
          <mat-form-field [floatPlaceholder]="'never'">
            <i class="fa fa-unlock-alt fa-lg"></i>
            <input formControlName="con_password" matInput placeholder="...  Confirm Password">
            <mat-error>Password is required</mat-error>
          </mat-form-field>
          <br>
          <button mat-raised-button [color]="'primary'" [disabled]="member.pristine||member.invalid">submit</button>
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
      height: 50px;
      font-family: 'sans-serif';
      font-size: 20px;
      font-weight: bolder;
    }

    mat-card {
      width: 500px;
      height: 500px;
      border: thin solid lightgrey;
    }
  `]
})
export class AddMemberComponent {
  member: FormGroup;

  constructor(private router: Router) {
    this.member = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      con_password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log('name = ' + this.member.get('username').value + '  password = ' + this.member.get('password').value);
    this.router.navigate(['admin']);
  }

  goBack() {
    this.router.navigate(['admin']);
  }
}


