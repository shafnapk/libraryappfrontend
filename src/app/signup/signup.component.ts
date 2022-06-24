import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
//   title:String="SIGN UP"
//  regItem=new registration(0," "," "," ", " ");
  constructor(public router:Router, public dataService:DataService ) { }

  ngOnInit(): void {
  }

}
