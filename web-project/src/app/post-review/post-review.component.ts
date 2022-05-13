import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {

  file:any=null;
  public testForm = this._formBuilder.group({
    "name":['',[Validators.required,Validators.minLength(3)]],
    "file":['']
  })
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSelectFile(event:any){
    if(event.target.files.length>0){
      // console.log("File info:", event.target.files[0])
      this.file = event.target.files[0];

    }else{
      this.file = null;
    }
  }
  onSubmit(data: any){
    // console.log("Name: ", data.name)
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("file", this.file);

    // console.log("formData:", formData)
    for(let pair of formData.entries()){
      console.log(pair[0], pair[1])
    }
  }
  get nameInput(){
    return this.testForm.controls["name"];
  }
}