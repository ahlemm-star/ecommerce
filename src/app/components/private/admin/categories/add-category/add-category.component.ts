import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  public categoryeForm: FormGroup
  constructor(builder:FormBuilder) { 
    let categoryeFormControls = {
      id: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
     
    }
    this.categoryeForm =builder.group(categoryeFormControls);
  }

  ngOnInit(): void {
  }
  get id(){return this.categoryeForm.get('id')}
  get name(){return this.categoryeForm.get('name')}
  catUser(){
    console.log(this.categoryeForm.value);
  }


}
