import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
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
    localStorage.setItem("IdTour",id);
    console.log("_id Tour: "+localStorage.getItem('_id'))
  }
}
