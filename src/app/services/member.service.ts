import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  http = inject(HttpClient);
  private readonly _baseApiUrl: string = environment.baseApiUrl + 'api/';

  getAllStudent(): Observable<Member[]> {
    let response$: Observable<Member[]> =
      this.http.get<Member[]>(this._baseApiUrl + 'member/get-all');

    return response$;
  }

  getByUserNameStudent(userName: string): Observable<Member> {
    let response$: Observable<Member> =
      this.http.get<Member>(this._baseApiUrl + 'account/get-by-username/' + userName);

    return response$;
  }

   getAllTeacher(): Observable<Member[]> {
    let response$: Observable<Member[]> =
      this.http.get<Member[]>(this._baseApiUrl + 'member/get-all');

    return response$;
  }

  getByUserNameTeacher(userName: string): Observable<Member> {
    let response$: Observable<Member> =
      this.http.get<Member>(this._baseApiUrl + 'account/get-by-username/' + userName);

    return response$;
  }

   getAllAdmin(): Observable<Member[]> {
    let response$: Observable<Member[]> =
      this.http.get<Member[]>(this._baseApiUrl + 'member/get-all');

    return response$;
  }

  getByUserNameAdmin(userName: string): Observable<Member> {
    let response$: Observable<Member> =
      this.http.get<Member>(this._baseApiUrl + 'account/get-by-username/' + userName);

    return response$;
  }
}