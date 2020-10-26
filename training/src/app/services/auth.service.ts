import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credential } from '../models/credential';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:string;
  constructor(private httpClient: HttpClient) { }

   login(credential:Credential):Observable<Token>{
      return this.httpClient.post<Token>(`${environment.apiUrl}/auth/login`,credential);
    }
}
