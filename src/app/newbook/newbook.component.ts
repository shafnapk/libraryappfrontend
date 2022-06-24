import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import {Book} from '../book';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
   title:String="Add Book"
   bookItem=new Book(0," "," "," ", " ");
  constructor(public router:Router, public dataService:DataService ) { }
 

  ngOnInit(): void {
  }
newbook()
{
  this.dataService.addBook(this.bookItem);
  console.log("called");
  alert("New Book Added");
  this.router.navigate(['/']);
}
}
