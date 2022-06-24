import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { HeaderComponent } from './header/header.component';
import { NewbookComponent } from './newbook/newbook.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookdetailsComponent,
    HeaderComponent,
    NewbookComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
   //FormsModule,
    //ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
