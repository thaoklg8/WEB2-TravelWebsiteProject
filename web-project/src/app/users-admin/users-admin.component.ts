import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {
users:any;
  user: User = new User();
  errorMessage: String = ""
  private _toast: any;
  constructor(private _service:MyserviceService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this._service.getUsers().subscribe({
      next: data => this.users = data, 
      error: err => this.errorMessage = err
    })
  }
 
  submitData(form:NgForm){
    console.log("Form data ", form.value)
    console.log("Model: ",this.user)
    if(this.user._id==null){ //insert
      if(this.user.Name ==""){
          alert('Tên không được để trống')}
        else{ if(this.user.Email==""){
            alert('Email không được để trống')}
          else{ if(this.user.Phone ==""){
        alert("Số điện thoại không được để trống")}
        else{
      alert('OK')
      this._service.postUser(this.user).subscribe(res=>{
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message ==="success"){
          alert("Insert Success!")
          this._toast.success("Inserted successfully!","SUCCESS")
          .then(() => {
            window.location.reload();
          })
        }
        else{
          alert("Fail!")
        }
      })}}}
    }
    else{ //update
      if(this.user.Name ==""){
        alert('Tên không được để trống')}
      else{ if(this.user.Email==""){
          alert('Email không được để trống')}
        else{ if(this.user.Phone ==""){
      alert("Số điện thoại không được để trống")}
      else{
        this._service.updateUser(this.user._id, this.user).subscribe(res=>{
          let resData = JSON.parse(JSON.stringify(res));
          if(resData.message ==="success"){
            alert("Update successfully!")
            this._toast.info("Updated successfully!","SUCCESS",{timeOut:3000})
            .then(() => {
              window.location.reload();
            })
          }
          else{
            alert(resData.message)
          }
        })
    }}}}
    this.getAllUsers();
  }
  onEdit(data:User){
    this.user = data;
  }
  onReset(form?:NgForm){
    if(form){
      form.reset();
    }
    this.user = new User();
  }
  onDelete(id:any, form:NgForm ){
    if(confirm("Are you sure you want to delete this user?")==true){
      this._service.deleteUser(id).subscribe(res=>{
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
    this.getAllUsers();
  }

}
