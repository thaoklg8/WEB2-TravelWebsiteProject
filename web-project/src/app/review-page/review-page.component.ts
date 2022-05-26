import { Component,OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  reviews: any;
  comments: any;
  errorMessage: String = ""
  constructor(private _service:MyserviceService) { }

  ngOnInit(): void {
    this.getAllReviews();
    // this.getAllComments();

    localStorage.getItem("_reviewId")
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
  // getCommentReviewByReviewId(id:string){
  //   console.log(this._service.getCommentReviewByReviewId(id))
  //   alert(this._service.getCommentReviewByReviewId(id))
  //   alert("Hello")
  // }
  Click(){
    
  }
}
