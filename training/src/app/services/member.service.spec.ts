import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { MemberService } from './member.service';

describe('MemberService', () => {
  let service: MemberService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    spyOn(httpClient,"get").and.returnValue(of(null))
    service = TestBed.inject(MemberService);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 

  describe('getMembers',() =>{
                    // ถ้า test เป็น Async ต้องใส่ done
    it('should call http get with valid url',(done) =>{
      service.getMembers()
        .subscribe(() => {
            expect(httpClient.get).toHaveBeenCalledWith(`${environment.apiUrl}/bnk/members`);
            done();
        })
    })
  });


  describe('getMember',() =>{
      // ถ้า test เป็น Async ต้องใส่ done
    it('should call http get with valid url',(done) =>{
      service.getMemberDetail('1')
        .subscribe(() => {
          expect(httpClient.get).toHaveBeenCalledWith(`${environment.apiUrl}/bnk/members/1`);
          done();
      })

    })
  });


});
