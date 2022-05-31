import { Component, OnInit } from '@angular/core';
import { Tour } from '../models/tour';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-tour-detail-page',
  templateUrl: './tour-detail-page.component.html',
  styleUrls: ['./tour-detail-page.component.css']
})
export class TourDetailPageComponent implements OnInit {
  tours: any;
  tour: Tour = new Tour();
    errorMessage: String = ""
    id: any
    u:any;
    private _toast: any;
      constructor(private _service:MyserviceService) { }
      ngOnInit(): void {
        this.id = localStorage.getItem('IdTour')
        this.getTourById()
        this.u=localStorage.getItem('u')
    console.log("u: "+this.u)
      }
      getTourById(){
        this._service.getTourById(this.id).subscribe({
          next: data => this.tours = data, 
          error: err => this.errorMessage = err
        })
      }
      getAllTours(){
        this._service.getTours().subscribe({
          next: data => this.tours = data, 
          error: err => this.errorMessage = err
        })
      }
     
}
