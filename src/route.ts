import {Route} from '@angular/router';
import {LoginComponent} from './app/Component/Login';
import {AdminComponent} from './app/Component/Admin';
import {AddMemberComponent} from './app/Component/addMember';
import {MemberComponent} from './app/Component/Member';

export const routes: Route[] = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'addmember', component: AddMemberComponent},
  {path: 'member', component: MemberComponent}
];
