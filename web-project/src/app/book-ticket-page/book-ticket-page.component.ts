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
tours:any;
errorMessage: String = ""
idUser:any
idTour:any
bookForm:any;
book:any;
total:any;
num:any=0;
  constructor(private _service:MyserviceService,private _toast:ToastrService) { }

  ngOnInit(): void {
    
    this.idUser=localStorage.getItem('IdUser')?.toString()
    this.idTour=localStorage.getItem('IdTour')?.toString()
    console.log("_id User " + this.idUser)
    console.log("_id Tour " + this.idTour)
    this.getUserById();
    this.getTourById();
    this.getAllTours();
    this.total='0'
  }
  getAllTours(){
    this._service.getTours().subscribe({
      next: data => this.tours = data, 
      error: err => this.errorMessage = err
    })
  }
  getUserById(){
    this._service.getUserById(this.idUser).subscribe({
      next: data => this.user = data, 
      error: err => this.errorMessage = err
    })
    console.log(this.user)
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
  send(num1:string, num2:string){
var a = parseInt(num1)
var b=parseInt(num2)
this.num=(a+b);
this.total =(a+(b/2))*this.tour.Price
console.log(this.total);
return this.total;
  }
  bookTicket(){

alert("Đặt vé thành công!")
  }
}
