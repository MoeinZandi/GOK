import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID,signal } from '@angular/core';
import { AppUser } from '../models/app-user.model';
import { map, Observable } from 'rxjs';
import { LoggedInUser } from '../models/logged-in.model';
import { Login } from '../models/login.model';
import { classes } from '../models/classes.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { ClassesComponent } from '../components/classes/classes';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  http = inject(HttpClient);
  router = inject(Router);
  loggedInUserSig = signal<LoggedInUser | null>(null);
  platformId = inject(PLATFORM_ID);

  private readonly _baseApiUrl: string = environment.baseApiUrl + 'api';

  register(userInput: AppUser): Observable<LoggedInUser | null> {
    let response$: Observable<LoggedInUser | null> =
      this.http.post<LoggedInUser>(this._baseApiUrl + 'account/register', userInput)
        .pipe(map(response => {
          if (response) {
            this.setCurrentUser(response);

            this.router.navigateByUrl('classes')
          }

          return null;
        }));
    return response$;
  }

  login(userInput: Login): Observable<LoggedInUser | null> {
    let response$: Observable<LoggedInUser | null> =
      this.http.post<LoggedInUser>(this._baseApiUrl + 'account/login', userInput)
        .pipe(map(response => {
          if (response) {
            this.setCurrentUser(response);

            this.router.navigateByUrl('classes')
          }

          return null;
        }));

    return response$;
  }

  getAllClasses(): Observable<classes[]> {
    let response$: Observable<classes[]> =
      this.http.get<classes[]>(this._baseApiUrl + 'classes/get-all');

    return response$;
  }

  getByTittle(Tittle: string): Observable<classes> {
    let response$: Observable<classes> =
      this.http.get<classes>(this._baseApiUrl + 'account/get-by-Tittle/' + Tittle);

    return response$;
  }

  updateByTittle(classId: string, userInput: AppUser): Observable<classes> {
    let response$: Observable<classes> =
      this.http.put<classes>(this._baseApiUrl + 'account/update/' + classId, userInput);

    return response$;
  }

  setCurrentUser(loggedInUser: LoggedInUser): void {
    this.loggedInUserSig.set(loggedInUser);

    if(isPlatformBrowser(this.platformId))
    localStorage.setItem('loggedIn', JSON.stringify(loggedInUser));
  }

  logout(): void {
    this.loggedInUserSig.set(null);

    if (isPlatformBrowser(this.platformId))
    localStorage.clear();

    this.router.navigateByUrl('account/login');
  }
}
