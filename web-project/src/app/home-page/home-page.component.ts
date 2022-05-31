import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
tours: any;
searchTours:any;
errorMessage: String = ""
  constructor(private _service:MyserviceService) { }

  ngOnInit(): void {
    this.getAllTours();
    localStorage.getItem("IdTour")
  }

  getAllTours(){
    this._service.getTours6().subscribe({
      next: data => this.tours = data, 
      error: err => this.errorMessage = err
    })
  }
  detail(id:string){
    localStorage.setItem("IdTour",id);
    console.log("_id Tour: "+localStorage.getItem('IdTour'))
  }
  search(name:string){
    console.log(name)
    this._service.getSearchTours(name).subscribe({
      next: data => this.tours = data, 
      error: err => this.errorMessage = err
    })
    // console.log(this.tours)
  }
}
