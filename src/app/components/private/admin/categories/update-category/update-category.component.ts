import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  public updateForm: FormGroup
  constructor(builder:FormBuilder) { 
    let updateFormControls = {
      id: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
     
    }
    this.updateForm =builder.group(updateFormControls);
  }


  ngOnInit(): void {
  }
  get id(){return this.updateForm.get('id')}
  get name(){return this.updateForm.get('name')}
  updateUser(){
    console.log(this.updateForm.value);
  }


}
