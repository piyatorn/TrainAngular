import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
import { DashboardComponent } from './dashboard.component';

// ใส่ f ข้างหน้าเพื่อบอกว่าจะ run test เฉพาะไฟล์ DashboardComponent 
// เท่านั้นไม่ไป run ที่ ไฟล์ member-detail อื่น ๆ
// fdescribe
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let memberService : MemberService;

  beforeEach(() => {
    const members: Member[] = [{
      _id:'1',
      name:'mock name',
      imgUrl:'mock_img',
      instagramId:'mock ins id'
    },{
      _id:'2',
      name:'mock name2',
      imgUrl:'mock_img2',
      instagramId:'mock ins id2'

    }];
    memberService = new MemberService(null);

    // สร้าง service ปลอม
    // obj นี้ fn นี้    |||| of() คือการสร้าง observable บางอย่าง
    spyOn(memberService,"getMembers").and.returnValue(of(members));
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent,MockPhotoBox],
      // เตรียมของให้มัน
      providers: [{
        provide: MemberService,
        useValue:memberService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ชื่อ TestCase จะไม่ยาว เน้นอ่านง่าย
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMembers service',() =>{
    //ไม่ต้องสร้าง coponent เพราะพอไฟล์ทำงาน ใน ngOnInit จะทำงานเลย

    expect(memberService.getMembers).toHaveBeenCalled();
  });

  it('should render phoho-box by members gotten by api',() =>{
    //ให้ไปหามาใน element นี้ว่ามี ID ที่กำหนดหรือไม่
    const member1 = fixture.debugElement.query(By.css('#member-1'));
    expect(member1).toBeTruthy();

    const member2 = fixture.debugElement.query(By.css('#member-2'));
    expect(member2).toBeTruthy();
  }); 

});

// คือ Component ลูก
// เรียกว่า stuff
// สนใจแค่ว่า มีการ gen id ออกมาครบตามจำนวนหรือไม่
@Component({
  selector:'app-photo-box',
  template:'<div id="member-{{member._id}}"></div>'
})

class MockPhotoBox{
  @Input()
  member: Member;
}
//--------------------------------