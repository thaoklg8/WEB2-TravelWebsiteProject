import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { passwordValidator } from 'validators/check.validators';
import { User } from '../models/user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  userForm: any;
  users:any;
  user: User = new User();
  errorMessage: String = ""

  constructor(private _service:MyserviceService, private _toast:ToastrService,private _FormBuilder:FormBuilder ) {}

  ngOnInit(): void {
    this.userForm =this._FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      question: ['', [Validators.required, Validators.minLength(20)]],
    })
  }
  submitData(form:NgForm){
    console.log("Form data ", form.value)
    console.log("Model: ",this.user)
    if(this.user._id==null){ //insert
      alert("Bạn đã gửi yêu cầu thành công")
      this._service.postUser(this.user).subscribe(res=>{
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message ==="success"){
          alert("Insert Success!")
          this._toast.success("Inserted successfully!","SUCCESS")
        }
        else{
          alert("Fail!")
        }
      })
    }
  }

  get Name(){
    return this.userForm.controls['name']
  }
  get Email(){
    return this.userForm.controls['email']
  }
  get Phone(){
    return this.userForm.controls['phone']
  }
  get Question(){
    return this.userForm.controls['question']
  }

}
