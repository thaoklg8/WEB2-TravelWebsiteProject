import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin-email-page',
  templateUrl: './signin-email-page.component.html',
  styleUrls: ['./signin-email-page.component.css']
})
export class SigninEmailPageComponent implements OnInit {
  signinEmailForm: any;
  constructor(private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signinEmailForm =this._FormBuilder.group({
      email: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
    })}

    get email(){
      return this.signinEmailForm.controls['email']
    }
    get pwd(){
      return this.signinEmailForm.controls['pwd']
    }
}
