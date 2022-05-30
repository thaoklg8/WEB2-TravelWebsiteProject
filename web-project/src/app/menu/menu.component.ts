import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
user:any;
idUser:any;
errorMessage: String = "";
u:any=0;
  constructor(private _service:MyserviceService) { }
 
  ngOnInit(): void {
    this.u=localStorage.getItem('IdUser')
    this.idUser=localStorage.getItem('IdUser')
    if(this.idUser.length>0){
      this.getUserById();
      localStorage.setItem('u','11111')

    }
    
  }
  getUserById(){
    this._service.getUserById(this.idUser).subscribe({
      next: data => this.user = data, 
      error: err => this.errorMessage = err
    })
    // console.log("Id user menu: "+this.user._id)
  }
reset(){
  // localStorage.setItem('IdUser','')
  // this.user._id=localStorage.getItem('IdUser')
  this.u=0;
  localStorage.setItem('u','0')
}
login(){
  this.user._id=localStorage.getItem('IdUser')
  this.u=localStorage.getItem('IdUser');
}
}
