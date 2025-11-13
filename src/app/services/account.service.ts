import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { AppUserStudent } from '../models/app-user-student.model';
import { map, Observable, tap } from 'rxjs';
import { LoggedInUser } from '../models/logged-in.model';
import { Login } from '../models/login.model';
import { classes } from '../models/classes.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  loggedInUserSig = signal<LoggedInUser | null>(null);
  private readonly _baseApiUrl = `${environment.baseApiUrl}api`;

  // ✅ Register user and automatically set current user
  register(userInput: AppUserStudent): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>(`${this._baseApiUrl}/account/register`, userInput).pipe(
      tap(response => {
        if (response) {
          this.setCurrentUser(response);
          this.router.navigateByUrl('/classes');
        }
      })
    );
  }

  // ✅ Login user
  login(userInput: Login): Observable<LoggedInUser> {
    return this.http.post<LoggedInUser>(`${this._baseApiUrl}/account/login`, userInput).pipe(
      tap(response => {
        if (response) {
          this.setCurrentUser(response);
          this.router.navigateByUrl('/classes');
        }
      })
    );
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

  // ✅ Set logged-in user
  setCurrentUser(loggedInUser: LoggedInUser): void {
    this.loggedInUserSig.set(loggedInUser);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('loggedIn', JSON.stringify(loggedInUser));
    }
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
