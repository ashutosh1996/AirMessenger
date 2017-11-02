import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-member',
  template: `
    <div fxLayout="column" fxLayoutAlign="start">
      <mat-toolbar class="t1">Welcome Ayush..</mat-toolbar>
      <mat-toolbar color="accent" class="t2">Your Messages</mat-toolbar>
      <mat-nav-list *ngFor="let member of member_list">
        <i class="fa fa-comments-o fa-lg" aria-hidden="true"></i>
        <mat-list-item>{{member}}</mat-list-item>
      </mat-nav-list>
      <br>
    </div>
  `,
  styles: [`
    mat-toolbar {
      font-family: 'sans-serif';
      font-size: 40px;
      color: white;
      font-weight: bolder;
      background: midnightblue;
    }

    .t1{
      height: 100px;
    }
    .t2 {
      font-size: 20px;
    }

    mat-form-field {
      width: 100%;
    }

    textarea {
      height: 100px;
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
export class MemberComponent {
  member_list: string[] = ['You hav been called for the meeting tommorow at 3 pm', 'The clients will be coming at 2pm'];
}

