import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.css']
})
export class TourPageComponent implements OnInit {

  tours: any;
  errorMessage: String = ""
    constructor(private _service:MyserviceService) { }
  
    ngOnInit(): void {
      this.getAllTours();
      localStorage.getItem("_id")
    }
  
    getAllTours(){
      this._service.getTours().subscribe({
        next: data => this.tours = data, 
        error: err => this.errorMessage = err
      })
    }
    detail(id:string){
      localStorage.setItem("_id",id);
      // console.log(localStorage.getItem('_id'))
    }
    
}
