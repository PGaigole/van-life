import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VanResponse, Vans } from '../models/van.model';

@Injectable({
  providedIn: 'root',
})
export class VanService {
  private apiUrl = '/api/vans';

  constructor(private http: HttpClient) {}

  getVans(): Observable<Vans> {
    return this.http.get<Vans>(this.apiUrl);
  }

  getVan(id: string): Observable<VanResponse> {
    return this.http.get<VanResponse>(this.apiUrl + `/${id}`);
  }
}
