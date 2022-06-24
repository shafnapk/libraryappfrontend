import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// // import {Observable} from ''
// import'rxjs/add/operator/map';
//  import{Headers,res} from '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getBooks(){
    //return this.http.get('http://localhost:3000/api/books')
    return this.http.get('http://localhost:3000/books');
  }
  //   .map(res=>res.json());
  // }
  // addbookitem(newBook){
  //   let headers=new headers();
  //   headers.append('Content-Type','application/json');
  //add
  addBook(item:any){
    console.log("accessed");
    return this.http.post('http://localhost:3000/insert' ,{item})
    .subscribe((data:any) =>{console.log(data)});
  }

  }

