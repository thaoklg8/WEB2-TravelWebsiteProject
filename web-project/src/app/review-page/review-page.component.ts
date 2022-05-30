import { Component,OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  reviews: any;
  comments: any;
  item:any;
  errorMessage: String = ""
u:any;
  constructor(private _service:MyserviceService) { }

  ngOnInit(): void {
    this.getAllReviews();
    localStorage.getItem("_reviewId")
    this.u=localStorage.getItem('u')
    console.log("u: "+this.u)
  }

  getAllReviews(){
    this._service.getAllReviews().subscribe({
      next: data => this.reviews = data, 
      error: err => this.errorMessage = err
    })
  }
  //
  getAllComments(){
    this._service.getAllComments().subscribe({
      next: data => this.comments = data, 
      error: err => this.errorMessage = err
    })
  }
  
  getCommentByReviewId(reviewId:string){
    this._service.getCommentByReviewId(reviewId).subscribe({
      next: data => this.comments = data, 
      error: err => this.errorMessage = err
    })
  }

  ////////////////////////////
  getAllCommentsByReviewId(){
    this._service.getAllComments().subscribe({
      next: data => this.comments = data, 
      error: err => this.errorMessage = err
    })
  }
  search(name:string){
    console.log(name)
    this._service.getSearchReviews(name).subscribe({
      next: data => this.reviews = data, 
      error: err => this.errorMessage = err
    })
    // console.log(this.tours)
  }

}
