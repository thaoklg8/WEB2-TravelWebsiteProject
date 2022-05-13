import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { passwordValidator } from 'validators/check.validators';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  User: any;
  users:any;
  errorMessage: String = ""

  constructor(private _service:MyserviceService, private _toast:ToastrService,private _FormBuilder:FormBuilder ) {}

  ngOnInit(): void {
    this.User =this._FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      confirmpwd: [''],
      agree: ['', [Validators.required]]
    }, 
    {Validators:[passwordValidator]})
    }

  getAllUsers(){
    this._service.getUsers().subscribe({
      next:(data:any) => this.users = data,
      error:err=> this.errorMessage=err
    })}
  
  submitData(form:NgForm){
    if(this.User._id == ''){
      
      // Insert product
      this._service.postUser(this.users).subscribe(res => {
      let resData = JSON.parse(JSON.stringify(res));
      if (res.message === "success"){
        // alert("Successful!");
        this._toast.success("Inserted Successfully!", "Success!")
        this.getAllUsers();
        }else{
          alert("Fail!");
        }
      })}}

    get Name(){
      return this.User.controls['name']
    }
    get Email(){
      return this.User.controls['email']
    }
    get Phone(){
      return this.User.controls['phone']
    }
    get Password(){
      return this.User.controls['pwd']
    }
    get Agree(){
      return this.User.controls['agree']
    }
    
      
  }
  


