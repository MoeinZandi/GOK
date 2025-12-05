import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { AppUserStudent } from '../models/app-user-student.model';
import { AppUserTeacher } from '../models/app-user-teacher.model';
import { AppUserAdmin } from '../models/app-user-admin.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  private readonly _baseApiUrl: string = environment.baseApiUrl + 'api/';

  updateByIdAdmin(userId: string, userInput: AppUserAdmin): Observable<Member> {
    let response$: Observable<Member> =
      this.http.put<Member>(this._baseApiUrl + 'account/update/' + userId, userInput);

    return response$;
  }
  updateByIdTeacher(userId: string, userInput: AppUserTeacher): Observable<Member> {
    let response$: Observable<Member> =
      this.http.put<Member>(this._baseApiUrl + 'account/update/' + userId, userInput);

    return response$;
  }

  updateByIdStudent(userId: string, userInput: AppUserStudent): Observable<Member> {
    let response$: Observable<Member> =
      this.http.put<Member>(this._baseApiUrl + 'account/update/' + userId, userInput);

    return response$;
  }
}
