import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ClassesComponent } from './components/classes/classes';
import { RegisterComponent } from './components/register/register';
import { LoginComponent } from './components/login/login';
import { Settings } from './components/settings/settings';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'settings', component: Settings},
  { path: 'profile', component: Profile},
  { path: '**', redirectTo: '' }
];
