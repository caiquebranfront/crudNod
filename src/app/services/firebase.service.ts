import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getAll(collection: string): Observable<any[]> {
    const url = `${this.baseUrl}/${collection}`;
    return this.http.get<any[]>(url);
  }

  public getOne(collection: string, id: string): Observable<any> {
    const url = `${this.baseUrl}/${collection}/${id}`;
    return this.http.get<any>(url);
  }

  public create(collection: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/${collection}`;
    return this.http.post<any>(url, data);
  }

  public update(collection: string, id: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/${collection}/${id}`;
    return this.http.put<any>(url, data);
  }

  public delete(collection: string, id: string): Observable<any> {
    const url = `${this.baseUrl}/${collection}/${id}`;
    return this.http.delete<any>(url);
  }
}
