import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = 'https://localhost:5001/api/about';
  
  constructor(private http: HttpClient) {}

  getStats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stats`);
  }

  getTeam(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/team`);
  }

  getValues(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/values`);
  }

   getAboutData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
