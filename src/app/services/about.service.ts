import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface StatVM {
  Value: string;
  Label: string;
}

interface ValueVM {
  Emoji: string;
  Title: string;
  Description: string;
}

interface TeamVM {
  Emoji: string;
  Name: string;
  Role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  // 🔹 Change base URL if needed
  private readonly baseUrl = '/api/about';

  constructor(private http: HttpClient) {}

  // =========================
  // Stats
  // =========================
  getStats(): Observable<StatVM[]> {
    return this.http.get<any[]>(`${this.baseUrl}/stats`).pipe(
      map(data =>
        data.map(item => ({
          Value: item.Value ?? item.value,
          Label: item.Label ?? item.label
        }))
      )
    );
  }

  // =========================
  // Values
  // =========================
  getValues(): Observable<ValueVM[]> {
    return this.http.get<any[]>(`${this.baseUrl}/values`).pipe(
      map(data =>
        data.map(item => ({
          Emoji: item.Emoji ?? item.emoji,
          Title: item.Title ?? item.title,
          Description: item.Description ?? item.description
        }))
      )
    );
  }

  // =========================
  // Team
  // =========================
  getTeam(): Observable<TeamVM[]> {
    return this.http.get<any[]>(`${this.baseUrl}/team`).pipe(
      map(data =>
        data.map(item => ({
          Emoji: item.Emoji ?? item.emoji,
          Name: item.Name ?? item.name,
          Role: item.Role ?? item.role
        }))
      )
    );
  }
}