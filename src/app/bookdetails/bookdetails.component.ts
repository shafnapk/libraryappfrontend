import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Book} from '../book';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css'],
 //providers:[DataService,Book]
})
export class BookdetailsComponent implements OnInit {
       booklist:Book[]=[];


// getbooks(){
  // to do later
//   this.dataService.getbooks()
//   .subscribe(books=>{
//     this.booklist=books;
//     console.log('data from dataservice:'+this.booklist);
//   })
// }
  constructor(private dataService:DataService ) { }

  ngOnInit(): void {
    this.dataService.getBooks().subscribe((data: any)=>{
       this.booklist=JSON.parse(JSON.stringify(data));
     })
  }

}
