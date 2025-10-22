import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Classes } from './components/classes/classes';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Settings } from './components/settings/settings';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'classes', component: Classes },
  { path: 'register', component: Register },
  { path: 'signin', component: Login },
  { path: 'settings', component: Settings},
  { path: 'profile', component: Profile},
  { path: '**', redirectTo: '' }
];
