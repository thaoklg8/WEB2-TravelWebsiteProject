import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-phone-page',
  templateUrl: './signin-phone-page.component.html',
  styleUrls: ['./signin-phone-page.component.css']
})
export class SigninPhonePageComponent implements OnInit {
  signinPhoneForm: any
  constructor(private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signinPhoneForm = this._FormBuilder.group({
      phone: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    })
  }
    get phone(){
      return this.signinPhoneForm.controls['phone']
    }
    get pwd(){
      return this.signinPhoneForm.controls['pwd']
    }
}