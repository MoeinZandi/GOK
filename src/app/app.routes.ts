import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ClassesComponent } from './components/classes/classes';
import { RegisterComponent } from './components/register/register';
import { Login } from './components/login/login';
import { SettingsComponent } from './components/settings/settings';
import { ProfileComponent } from './components/profile/profile';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: Login },
  { path: 'settings', component: SettingsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', redirectTo: '' }
];
