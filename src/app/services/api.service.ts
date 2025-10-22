import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://localhost:5001/api'; // your ASP.NET API URL

  constructor(private http: HttpClient) {}

  // Auth
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { email, password });
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, { name, email, password });
  }

  // Classes
  getClasses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/classes`);
  }

  // Search
  search(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search?q=${query}`);
  }
}
