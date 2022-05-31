import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from './models/user';
import {Tour} from './models/tour';
import { Review } from './models/review';
import { Comment } from './models/comment';
// import { ReviewComment } from './models/review-comment';
// import { Content } from '@angular/compiler/src/render3/r3_ast';
const baseUrl ="http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  httpOptions = {
    'Content-type': 'application/json'
  }
  reviews:any;
  comments:any;
  item:any;
  getAllUsers() {
    throw new Error('Method not implemented.');
  }
  constructor(private _http:HttpClient) { }

  getTours():Observable<Tour[]>{
    return this._http.get<Tour[]>(`${baseUrl}/tours`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getSearchTours(name:string):Observable<Tour[]>{
    return this._http.get<Tour[]>(`${baseUrl}/tours/search/${name}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getTourById(id:string):Observable<Tour[]>{
    return this._http.get<Tour[]>(`${baseUrl}/tour/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  postTour(data:Tour):Observable<any>{
    return this._http.post<Tour>(`${baseUrl}/tour`,data);
  }

  updateTour(id:string, newData:Tour):Observable<any>{
    return this._http.patch(`${baseUrl}/${id}`,newData)
    }
    
  deleteTour(id:string){
    return this._http.delete<Tour>(`${baseUrl}/${id}`);
  }
//////////////////User

getUsers():Observable<User[]>{
  return this._http.get<User[]>(`${baseUrl}/users`).pipe(
    retry(2),
    catchError(this.handleError)
  )
}
getUserById(id:string):Observable<User[]>{
  return this._http.get<User[]>(`${baseUrl}/user/${id}`).pipe(
    retry(2),
    catchError(this.handleError)
  )
}
  postUser(data:User):Observable<any>{
    return this._http.post<User>(`${baseUrl}/user/user`,data);
  }
  updateUser(id:string, newData:User):Observable<any>{
    return this._http.patch(`${baseUrl}/user/${id}`,newData)
    }
  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }
  deleteUser(id:string){
    return this._http.delete<Tour>(`${baseUrl}/user/${id}`);
  }


//reviews

getAllReviews():Observable<Review[]>{
  return this._http.get<Review[]>(`${baseUrl}/reviews`).pipe(
    retry(2),
    catchError(this.handleError)
  ) 
}
getReviewById(id:string):Observable<Review[]>{
  return this._http.get<Review[]>(`${baseUrl}/review/${id}`).pipe(
    retry(2),
    catchError(this.handleError)
  )
}
getSearchReviews(name:string):Observable<Review[]>{
  return this._http.get<Review[]>(`${baseUrl}/reviews/search/${name}`).pipe(
    retry(2),
    catchError(this.handleError)
  )
}

//comments
getAllComments():Observable<Comment[]>{
  return this._http.get<Comment[]>(`${baseUrl}/comments`).pipe(
    retry(2),
    catchError(this.handleError)
  )
}
//
getCommentByReviewId(id:string):Observable<Comment[]>{
  return this._http.get<Comment[]>(`${baseUrl}/comment/${id}`).pipe(
    retry(2),
    catchError(this.handleError)
  )
}


//post review
uploadData(data: any){
  return this._http.post(`${baseUrl}/review/upload/post`, data).pipe(
    retry(2),
    catchError(this.handleError)
  )
  // return this._http.post(`${baseUrl}/review/upload/post`, data)
  // .subscribe(res => alert('Done'));
}



}