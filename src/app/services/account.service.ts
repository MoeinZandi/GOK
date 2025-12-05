import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { AppUserStudent } from '../models/app-user-student.model';
import { map, Observable, retry, tap } from 'rxjs';
import { LoggedInUser } from '../models/logged-in.model';
import { LoginStudent } from '../models/login-student.model';
import { classes } from '../models/classes.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { isPlatformBrowser } from '@angular/common';
import { AppUserTeacher } from '../models/app-user-teacher.model';
import { LoginTeacher } from '../models/login-teacher.model';
import { AppUserAdmin } from '../models/app-user-admin.model';
import { LoginAdmin } from '../components/account/login-admin/login-admin';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  http = inject(HttpClient);
  router = inject(Router);
  platformId = inject(PLATFORM_ID);
  loggedInUserSig = signal<LoggedInUser | null>(null);
  private readonly _baseApiUrl: string = environment.baseApiUrl + 'api/';

  // ✅ Register student
  registerStudent(userInput: AppUserStudent): Observable<LoggedInUser | null> {
    let response$: Observable<LoggedInUser | null> =
    this.http.post<LoggedInUser>(this._baseApiUrl + '/account/register/main', userInput)
    .pipe(map(response => {
        if (response) {
          this.setCurrentUser(response);

          this.router.navigateByUrl('/classes');
        }
        return null;
      })
    );
    return response$;
  }

  // ✅ Login user
  loginStudent(userInput: LoginStudent): Observable<LoggedInUser | null> {
    let response$: Observable<LoggedInUser | null> =
    this.http.post<LoggedInUser>(this._baseApiUrl + '/account/login' , userInput)
    .pipe(map(response => {
        if (response) {
          this.setCurrentUser(response);

          this.router.navigateByUrl('/classes');
        }
        return null;
      })
    );
    return response$;
  }
  // ✅ register teacher
  registerTeacher(userInput: AppUserTeacher): Observable<LoggedInUser | null> {
    let response$: Observable<LoggedInUser | null> =
    this.http.post<LoggedInUser>(this._baseApiUrl + '/account/register/main', userInput)
    .pipe(map(response => {
        if (response) {
          this.setCurrentUser(response);

          this.router.navigateByUrl('/classes');
        }
        return null;
      })
    );
    return response$;
  }

  // ✅ Login teacher
  loginTeacher(userInput: LoginTeacher): Observable<LoggedInUser | null> {
    let response$: Observable<LoggedInUser | null> =
    this.http.post<LoggedInUser>(this._baseApiUrl + '/account/login' , userInput)
    .pipe(map(response => {
        if (response) {
          this.setCurrentUser(response);

          this.router.navigateByUrl('/classes');
        }
        return null;
      })
    );
    return response$;
  }
  // ✅ register admin
  registerAdmin(userInput: AppUserAdmin): Observable<LoggedInUser | null> {
    let response$: Observable<LoggedInUser | null> =
    this.http.post<LoggedInUser>(this._baseApiUrl + '/account/register/main', userInput)
    .pipe(map(response => {
        if (response) {
          this.setCurrentUser(response);

          this.router.navigateByUrl('/classes');
        }
        return null;
      })
    );
    return response$;
  }

  // ✅ Login admin
  loginAdmin(userInput: LoginAdmin): Observable<LoggedInUser | null> {
    let response$: Observable<LoggedInUser | null> =
    this.http.post<LoggedInUser>(this._baseApiUrl + '/account/login' , userInput)
    .pipe(map(response => {
        if (response) {
          this.setCurrentUser(response);

          this.router.navigateByUrl('/classes');
        }
        return null;
      })
    );
    return response$;
  }

  // ✅ Get classes
  getAllClasses(): Observable<classes[]> {
    return this.http.get<classes[]>(`${this._baseApiUrl}/classes/get-all`);
  }

  // ✅ Get by title
  getByTittle(Tittle: string): Observable<classes> {
    return this.http.get<classes>(`${this._baseApiUrl}/account/get-by-Tittle/${Tittle}`);
  }

  // ✅ Update class
  updateByTittle(classId: string, userInput: AppUserStudent): Observable<classes> {
    return this.http.put<classes>(`${this._baseApiUrl}/account/update/${classId}`, userInput);
  }

  authorizeLoggedInUser(): void {
    this.http.get<LoggedInUser>(this._baseApiUrl + 'account').subscribe({
      error: (err) => {
        console.log(err.error);
        this.logout();
      }
    });
  }

  // ✅ Set logged-in user
  setCurrentUser(loggedInUser: LoggedInUser): void {
    this.loggedInUserSig.set(loggedInUser);

    if (isPlatformBrowser(this.platformId)) 
      localStorage.setItem('loggedIn', JSON.stringify(loggedInUser));
    
  }

  // ✅ Logout
  logout(): void {
    this.loggedInUserSig.set(null);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.router.navigateByUrl('/login');
  }
}
