import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // set พร้อมกับประกาศ field
  constructor(private httpClient:HttpClient) { }

  getMembers(): Observable<Member[]>{
    //implement          //get return type
    return this.httpClient.get<Member[]>(`${environment.apiUrl}/bnk/members`);
  }

  getMemberDetail(id:string): Observable<Member>{
    //implement          //get return type
    return this.httpClient.get<Member>(`${environment.apiUrl}/bnk/members/${id}`);
  }
}
