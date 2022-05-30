import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {
reviews:any;
  file:any=null;
  name:any;
  content:any;
  public testForm = this._formBuilder.group({
    "name":['',[Validators.required,Validators.minLength(3)]],
    "file":[''],
    "content":['',[Validators.required,Validators.minLength(3)]],
  })
  constructor(private _formBuilder: FormBuilder,private _service:MyserviceService,private _http:HttpClientModule,) { }

  ngOnInit(): void {
    this.getData()
    this.name = localStorage.getItem('IdName')
  }

  onSelectFile(event:any){
    if(event.target.files.length>0){
      this.file = event.target.files[0];

    }else{
      this.file = null;
    }
  }
  onSubmit(data: any){
    const formData = new FormData();
    formData.append("Title", data.name);
    formData.append("file", this.file);
    formData.append("UserName", this.name);
    formData.append("Content", data.content);
    formData.append("Date", "12/06/2022");
    formData.append("Like", "10");

    console.log("formData:", formData)
    for(let pair of formData.entries()){
      console.log(pair[0], pair[1])
    }
    //send data to server
    this._service.uploadData(formData).subscribe({
      next: res => {
        console.log("Success!")
      },
      error: err => {
        console.log("Error: ", err.message)
      }
      
    })
  }
  
  get nameInput(){
    return this.testForm.controls["name"];
  }
  get contentInput(){
    return this.testForm.controls["content"];
  }



  getData(){
    this._service.getAllReviews().subscribe({
      next: data =>this.reviews = data,
      error: err=> console.log(err)
    })
  }
}