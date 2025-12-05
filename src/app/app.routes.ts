import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ClassesComponent } from './components/classes/classes';
import { RegistermainComponent } from './components/account/register-main/register-main';
import { LoginComponent } from './components/account/login/login';
import { SettingsComponent } from './components/settings/settings';
import { ProfileComponent } from './components/profile/profile';
import { AdminRegisterComponent } from './components/account/admin-register/admin-register';
import { StudentRegisterComponent } from './components/account/student-register/student-register';
import { TeacherRegisterComponent } from './components/account/teacher-register/teacher-register';
import { authLoggedInGuard } from './guards/auth-logged-in.guard';
import { authGuard } from './guards/auth.guard';
import { LoadingComponent } from './components/loading/loading';
import { Footer } from './components/footer/footer';
import { layoutGuard } from './guards/layout-guard';
import { Searchbox } from './components/searchbox/searchbox';
import { LoginAdmin } from './components/account/login-admin/login-admin';
import { LoginStudent } from './components/account/login-student/login-student';
import { LoginTeacher } from './components/account/login-teacher/login-teacher';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'register/main', component: RegistermainComponent, canActivate:[authLoggedInGuard] },
  { path: 'register/admin', component: AdminRegisterComponent, canActivate:[authLoggedInGuard]},
  { path: 'register/student', component: StudentRegisterComponent, canActivate:[authLoggedInGuard]},
  { path: 'register/teacher', component: TeacherRegisterComponent, canActivate:[authLoggedInGuard]},
  { path: 'login', component: LoginComponent, canActivate:[authLoggedInGuard] },
  { path: 'login/student', component: LoginStudent},
  { path: 'login/admin', component:LoginAdmin},
  { path: 'login/teacher', component: LoginTeacher},
  { path: 'settings', component: SettingsComponent, canActivate:[authGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[authGuard]},
  { path: 'loading', component: LoadingComponent, canActivate:[layoutGuard]},
  { path: 'footer', component: Footer, canActivate:[layoutGuard]},
  { path: '**', redirectTo: '' },
  { path: 'search', component: Searchbox}
      
];
