import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

import { MemberDetailComponent } from './member-detail.component';

describe('MemberDetailComponent', () => {
  let component: MemberDetailComponent;
  let memberService : MemberService;
  let activatedRoute: any;
  let fixture: ComponentFixture<MemberDetailComponent>;

  beforeEach(() => {
    let member: Member = {
      _id:'1',
      name:'mock name',
      imgUrl:'mock_img',
      instagramId:'mock ins id'
    }
    memberService = new MemberService(null);
    spyOn(memberService,"getMemberDetail").and.returnValue(of(member))
    activatedRoute = {
      snapshot:{
        paramMap:{
          get:() => {
            return '1';
          }
        }
      }
    };
    // this.route.snapshot.paramMap.get('id');

  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDetailComponent ],
      providers:[
        {provide:ActivatedRoute,useValue:activatedRoute},
        {provide:MemberService,useValue:memberService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get member by given memberId',() => {
                                        // ถูกเรียกด้วย parameter อะไร
    expect(memberService.getMemberDetail).toHaveBeenCalledWith('1');
  });

  it('should render member detail correctly',() => {
    const img = fixture.debugElement.query(By.css('#member-img')).nativeElement as HTMLElement;
    const name = fixture.debugElement.query(By.css('#member-name')).nativeElement as HTMLInputElement;
    const imgUrl = fixture.debugElement.query(By.css('#member-img-url')).nativeElement as HTMLInputElement;
    const igId = fixture.debugElement.query(By.css('#member-instagram-id')).nativeElement as HTMLInputElement;
    expect(img.getAttribute('src')).toEqual('mock_img');
    expect(name.value).toEqual('mock name');
    expect(imgUrl.value).toEqual('mock_img');
    expect(igId.value).toEqual('mock ins id');
  });
});
