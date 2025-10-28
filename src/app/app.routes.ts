import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Orgs} from './orgs/orgs';
import {Projects} from './projects/projects';
import {Users} from './users/users';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'orgs', component: Orgs },
  { path: 'projects', component: Projects },
  { path: 'users', component: Users },
];
