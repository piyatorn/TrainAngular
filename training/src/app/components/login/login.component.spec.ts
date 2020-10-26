
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Token } from 'src/app/models/token';
import { AuthService } from 'src/app/services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let authService : AuthService;
  let fixture: ComponentFixture<LoginComponent>;
  let router : Router;

  beforeEach(() => {
    let token:Token = {
      token:'mocked token'
    };
    authService = new AuthService(null);
    spyOn(authService,"login").and.returnValue(of(token))
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ LoginComponent ],
      providers:[
        {provide:AuthService,
         useValue:authService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call login success when username and password is vaild",() => {
    const loginTxt = fixture.debugElement.query(By.css("#loginTxt")).nativeElement as HTMLInputElement;
    const passwordTxt = fixture.debugElement.query(By.css("#passwordTxt")).nativeElement as HTMLInputElement;
   
    //==========================
    loginTxt.value = 'username';
    loginTxt.dispatchEvent(new Event('input')); // บอกว่ามีการ input ต้องมาคู่กันกับ บรรทัดข้างบนตลอด
    //==========================

    passwordTxt.value = 'password';
    passwordTxt.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const loginBtn = fixture.debugElement.query(By.css('loginBtn')).nativeElement as HTMLInputElement;
    loginBtn.click(); 
    fixture.detectChanges();
    expect(authService.login).toHaveBeenCalledWith({login:'username',password:'password'});
  });



  it("should not call login when username and password is empty",() => {
    const loginTxt = fixture.debugElement.query(By.css("#loginTxt")).nativeElement as HTMLInputElement;
    const passwordTxt = fixture.debugElement.query(By.css("#passwordTxt")).nativeElement as HTMLInputElement;
   
    //==========================
    loginTxt.value = 'username';
    loginTxt.dispatchEvent(new Event('input')); // บอกว่ามีการ input ต้องมาคู่กันกับ บรรทัดข้างบนตลอด
    //==========================

    passwordTxt.value = '12';
    passwordTxt.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const loginBtn = fixture.debugElement.query(By.css('loginBtn')).nativeElement as HTMLElement;
    loginBtn.click(); 
    fixture.detectChanges();
    
    expect(authService.login).not.toHaveBeenCalled();
  });

});
 