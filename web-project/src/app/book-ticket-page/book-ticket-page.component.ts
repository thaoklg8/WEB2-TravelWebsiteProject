import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-book-ticket-page',
  templateUrl: './book-ticket-page.component.html',
  styleUrls: ['./book-ticket-page.component.css']
})
export class BookTicketPageComponent implements OnInit {

user:any;
tour:any;
errorMessage: String = ""
idUser:any
idTour:any
bookForm:any;
book:any;
  constructor(private _service:MyserviceService,private _toast:ToastrService) { }

  ngOnInit(): void {
    
    this.idUser=localStorage.getItem('IdUser')?.toString()
    this.idTour=localStorage.getItem('IdTour')?.toString()
    console.log("_id User " + this.idUser)
    console.log("_id Tour " + this.idTour)
    this.getUserById();
    this.getTourById();
  }
  getUserById(){
    this._service.getUserById(this.idUser).subscribe({
      next: data => this.user = data, 
      error: err => this.errorMessage = err
    })
    return this.user;
  }
  getTourById(){
    this._service.getTourById(this.idTour).subscribe({
      next: data => this.tour = data, 
      error: err => this.errorMessage = err
    })
    return this.tour;
  }
  submitData(form:NgForm){
    alert("Hello")
    console.log("Form data ", form.value)
    console.log("Model: ",this.book)

  }
  // get Name(){
  //   return this.bookForm.controls['name']
  // }
  // get Email(){
  //   return this.bookForm.controls['email']
  // }
  // get Phone(){
  //   return this.bookForm.controls['phone']
  // }
  // get Password(){
  //   return this.bookForm.controls['pwd']
  // }
  // get Agree(){
  //   return this.bookForm.controls['agree']
  // }
}
