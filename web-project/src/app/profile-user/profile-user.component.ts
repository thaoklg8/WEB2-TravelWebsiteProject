import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { passwordValidator } from 'validators/check.validators';
import { User } from '../models/user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  profileForm: any;
  users:any;
  errorMessage: String="";
  user: User = new User();

  constructor(private _service:MyserviceService, private _toast:ToastrService,private _FormBuilder:FormBuilder, private _router: Router ) { }

  ngOnInit(): void {
    this.profileForm =this._FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    })
  }
  submitData(form:NgForm){
    if(this.user._id==null){ //insert
      this._service.postUser(this.user).subscribe(res=>{
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message ==="success"){
          // alert("Insert Success!")
          this._toast.success("Inserted successfully!","SUCCESS")
        }
        else{
          alert("Fail!")
        }
      })
    }
  }
  get Name(){
    return this.profileForm.controls['name']
  }
  get Email(){
    return this.profileForm.controls['email']
  }
  get Phone(){
    return this.profileForm.controls['phone']
  }
}
