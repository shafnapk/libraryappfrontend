import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import {BookdetailsComponent} from  './bookdetails/bookdetails.component';
 import {NewbookComponent} from './newbook/newbook.component';
 import {LoginComponent} from './login/login.component';
 import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
 {path:"",component: BookdetailsComponent},
 {path:"", component:NewbookComponent},
 {path:"",component: SignupComponent },
 {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
