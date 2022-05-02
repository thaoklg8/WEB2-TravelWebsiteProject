import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from './models/user';
// import { Intro } from './models/intro';
import {Tour} from './models/tour';
const baseUrl ="http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  constructor(private _http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this._http.get<User[]>(`${baseUrl}/users`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getTours():Observable<Tour[]>{
    return this._http.get<Tour[]>(`${baseUrl}/tours`).pipe(
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


  handleError(err: HttpErrorResponse){
    return throwError(()=> new Error(err.message))
  }

}

