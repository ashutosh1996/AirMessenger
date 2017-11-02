import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  template: `
    <div fxLayout="column" fxLayoutAlign="start">
      <mat-card>Post Here..</mat-card>
      <mat-form-field hintLabel="Max 150 characters" [floatPlaceholder]="'never'">
        <textarea matInput #input maxlength="150" placeholder="Enter your text here...."></textarea>
        <mat-hint align="end">{{input.value?.length || 0}}/150</mat-hint>
      </mat-form-field>
      <button class="b2" mat-raised-button color="accent" fxFlexAlign="end">Notify</button>
      <br>
      <br>
      <mat-card>Members</mat-card>
      <mat-nav-list>
        <mat-list-item *ngFor="let member of member_list">
          <i class="fa fa-user-circle-o fa-lg"></i>
          <h1 mat-line>{{member.username}}</h1>
          <h2 mat-line> {{member.email}} </h2>
          <p mat-line>{{member.mobile}}</p>
        </mat-list-item>

      </mat-nav-list>
      <br>
      <button class="b1" mat-fab (click)="addMember()">+</button>
    </div>
  `,
  styles: [`
    mat-card {
      font-family: 'sans-serif';
      font-size: 30px;
      color: white;
      height: 30px;
      font-weight: bolder;
      background: midnightblue;
    }

    mat-form-field {
      width: 100%;
    }

    textarea {
      height: 50px;
    }

    .b1 {
      font-size: 40px;
    }

    .b2 {
      height: 40px;
      width: 100px;
      font-family: 'fantasy';
      font-size: 20px;
    }
  `]
})
export class AdminComponent {

  member_list: any[] = [
    {
      username: 'Ayush Katiyar',
      email: 'Ayush@gmail.com',
      mobile: 9711496386
    },
    {
      username: 'Kushagra Saxena',
      email: 'Kushagra@gmail.com',
      mobile: 9745884566
    },
    {
      username: 'Alok Raj Gupta',
      email: 'Aloc@gmail.com',
      mobile: 9745687999
    }
  ];

  constructor(private router: Router, db: AngularFireDatabase) {
  }

  addMember() {
    this.router.navigate(['addmember']);
  }
}

