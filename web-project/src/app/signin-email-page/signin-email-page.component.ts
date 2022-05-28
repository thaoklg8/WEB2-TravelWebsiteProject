import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { User } from '../models/user';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-signin-email-page',
  templateUrl: './signin-email-page.component.html',
  styleUrls: ['./signin-email-page.component.css']
})
export class SigninEmailPageComponent implements OnInit {
  signinEmailForm: any;
  users:any;
  user: User = new User();
  user1: User = new User();
  errorMessage: String = ""
  // dataUser: User = new User;
 id:any;
  constructor(private _service:MyserviceService,private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signinEmailForm =this._FormBuilder.group({
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
    })
    this.getAllUsers()
    localStorage.getItem('IdUser')
  }
    
    getAllUsers(){
      this._service.getUsers().subscribe({
        next: data => this.users = data, 
        error: err => this.errorMessage = err
      })
      return this.users;
    }
    // getUserById(){
    //   this._service.getUserById(this.id).subscribe({
    //     next: data => this.users= data, 
    //     error: err => this.errorMessage = err
    //   })
    // }
    submitData(form:NgForm){
      console.log("Form data ", form.value)
      console.log("Model: ", this.user)
      this.users = this.getAllUsers();
      
      console.log("All users: ", this.users)
      for(let i=0; i<this.users.length;i++){
        if((this.users[i].Email==form.value.email) && (this.users[i].Password===form.value.pwd)){
          alert("Đăng nhập thành công")
          console.log('OK')
          console.log(this.users[i].Role)
          localStorage.setItem('IdUser',this.users[i]._id)
          console.log("_id User Sign in: "+ localStorage.getItem('IdUser'))
          break;
        }    
        else if(i==this.users.length-1){
          alert("Sai Email hoặc Password")
        }   
      }
     
    }

    get email(){
      return this.signinEmailForm.controls['email']
    }
    get pwd(){
      return this.signinEmailForm.controls['pwd']
    }
    login(){
      var login = null;
      console.log(localStorage.getItem('IdUser'))
      if(localStorage.getItem('IdUser')){
        login= 1
      }
      return login
    }
}
