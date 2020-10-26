import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoBoxComponent } from './components/photo-box/photo-box.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { P2Pipe, P3Pipe } from './pipes/p2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PhotoBoxComponent,
    MemberDetailComponent,
    LoginComponent,
    AdminComponent,
    P2Pipe,
    P3Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
