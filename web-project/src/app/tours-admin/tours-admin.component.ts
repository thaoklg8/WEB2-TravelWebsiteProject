import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tour } from '../models/tour';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-tours-admin',
  templateUrl: './tours-admin.component.html',
  styleUrls: ['./tours-admin.component.css']
})

export class ToursAdminComponent implements OnInit {
  tours: any;
tour: Tour = new Tour();
  errorMessage: String = ""
  private _toast: any;
    constructor(private _service:MyserviceService) { }
  
    ngOnInit(): void {
      this.getAllTours();
    }
  
    getAllTours(){
      this._service.getTours().subscribe({
        next: data => this.tours = data, 
        error: err => this.errorMessage = err
      })
    }


    submitData(form:NgForm){
      console.log("Form data ", form.value)
      console.log("Model: ",this.tour)
      if(this.tour._id==null){ //insert
        this._service.postTour(this.tour).subscribe(res=>{
          let resData = JSON.parse(JSON.stringify(res));
          if(resData.message ==="success"){
            alert("Insert Success!")
            this._toast.success("Inserted successfully!","SUCCESS")
            this.onReset();
            this.getAllTours();
          }
          else{
            alert("Fail!")
          }
        })
      }
      else{ //update
          this._service.updateTour(this.tour._id, this.tour).subscribe(res=>{
            let resData = JSON.parse(JSON.stringify(res));
            if(resData.message ==="success"){
              alert("Update successfully!")
              this._toast.info("Updated successfully!","SUCCESS",{timeOut:3000})
              this.onReset();
              this.getAllTours();
            }
            else{
              alert(resData.message)
            }
          })
      }
      this.getAllTours();
    }
    onEdit(data:Tour){
      this.tour = data;
    }
    onReset(form?:NgForm){
      if(form){
        form.reset();
      }
      this.tour = new Tour();
    }
    onDelete(id:any, form:NgForm ){
      if(confirm("Are you sure you want to delete this tour?")==true){
        this._service.deleteTour(id).subscribe(res=>{
          let resData = JSON.parse(JSON.stringify(res));
          if(resData.message ==="success"){
            this._toast.success("Deleted successfully!","SUCCESS")
          }
          else{
            alert(resData.message)
          }
        })
      }
      this.getAllTours();
    }
  
  }
  