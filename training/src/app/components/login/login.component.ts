import { Route } from '@angular/compiler/src/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CommomValidator } from 'src/app/validators/commom-validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router) { }

  

  ngOnInit(): void {
    // formGroup ,FormArray, FormControl
    // this.form = new FormGroup({
    //   login: new FormControl(''),  // Input field
    //   password: new FormControl('') // Input field
    // });

    this.form = this.fb.group({
      login:['',[Validators.required]],
      password:['',[CommomValidator.password]]
    });

   
  }

  login():void{

    this.authService.login(this.form.value).subscribe({
        next:(result) =>{
          this.authService.token = result.token;  // สมมติว่่ามันคือ Session
          this.router.navigate(["admin"]);
          alert(result.token)
        },error:(err) => {
          console.log(err)
        }
    });

    //this.form.get('login').disable();
    console.log(this.form);
   // console.log(this.form.value);
  }


  // get loginControl(): Ab{
  //   return this.form.get('login');
  // }


}
