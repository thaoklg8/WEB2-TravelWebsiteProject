import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  file:any=null;
    constructor(private _service:MyserviceService, private _router: Router) { }
  
    ngOnInit(): void {
      this.getAllTours();
    }
  
    getAllTours(){
      this._service.getTours().subscribe({
        next: data => this.tours = data, 
        error: err => this.errorMessage = err
      })
    }
    onSelectFile(event:any){
      if(event.target.files.length>0){
        this.file = event.target.files[0];
      }else{
        this.file = null;
      }
    }

    submitData(form:NgForm){
      console.log("Form data ", form.value)
      // this.tour.Image=this.file.name
      console.log("Model: ",this.tour)
      if(this.tour._id==null){ //insert
        if(this.tour.Id==""){
          alert('Id không được để trống')}
        else{if(this.tour.Description ==""){
          alert('Địa điểm không được để trống')}
        else{ if(this.tour.Province==""){
          alert('Tỉnh / Thành phố không được để trống')}
        else{ if(this.tour.Content ==""){
          alert("Thông tin chung không được để trống")}
        else{ if(this.tour.Description==""){
          alert('Mô tả không được để trống')}
        else{if(this.tour.Transportation ==""){
          alert('Phương tiện vận chuyển không được để trống')}
        // else{ if(this.tour.Image==""){
        //   alert('Hình ảnh không được bỏ trống')}
        else{ if(this.tour.Time ==""){
        alert("Thời gian không được để trống")}
        alert('OK')
        this._service.postTour(this.tour).subscribe(res=>{
          let resData = JSON.parse(JSON.stringify(res));
          if(resData.message ==="success"){
            alert("Insert Success!")
            this._toast.success("Inserted successfully!","SUCCESS")
            .then(() => {
              window.location.reload();
            })
            this.onReset();
            this.getAllTours();
          }
          else{
            alert("Fail!")
          }
           })
        // this._service.upload(form).subscribe({
        //   next: res => {
        //     console.log("success")
        //     this._router.navigate(['/adminTour'])
        //   },
        //   error: err => {
        //     console.log("Error 1: ", err.message)
        //   }
          
          
        // })
          }}}}}} }
      // }
      else{ //update
        if(this.tour.Id==""){
          alert('Id không được để trống')
        }else{
        if(this.tour.Description ==""){
          alert('Địa điểm không được để trống')}
        else{ if(this.tour.Province==""){
          alert('Tỉnh / Thành phố không được để trống')}
        else{ if(this.tour.Content ==""){
          alert("Thông tin chung không được để trống")}
        else{ if(this.tour.Description==""){
          alert('Mô tả không được để trống')}
        else{if(this.tour.Transportation ==""){
          alert('Phương tiện vận chuyển không được để trống')}
        else{ if(this.tour.Image==""){
          alert('Hình ảnh không được bỏ trống')}
        else{ if(this.tour.Time ==""){
          alert("Thời gian không được để trống")}
          this._service.updateTour(this.tour._id, this.tour).subscribe(res=>{
            let resData = JSON.parse(JSON.stringify(res));
            if(resData.message ==="success"){
              alert("Update successfully!")
              this._toast.info("Updated successfully!","SUCCESS",{timeOut:3000})
              .then(() => {
                window.location.reload();
              })
              this.onReset();
              this.getAllTours();
            }
            else{
              alert(resData.message)
            }
          })
          // this._service.uploadData(form).subscribe({
          //   next: res => {
          //     console.log("success")
          //     alert('Đã đăng bài thành công')
          //     this._router.navigate(['/review'])
          //   },
          //   error: err => {
          //     console.log("Error: ", err.message)
          //     alert('Đăng bài thất bại: ' + err.message )
          //   }
          // })
      }}}}}}}}
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
            .then(() => {
              window.location.reload();
            })
          }
          else{
            alert(resData.message)
          }
        })
      }
      this.getAllTours();
    }
  
  }
  
