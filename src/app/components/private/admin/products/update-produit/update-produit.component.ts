import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent implements OnInit {
  public updateprod: FormGroup
  constructor(builder:FormBuilder) { 
    let updateFormControls = {
      id: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
     
    }
    this.updateprod =builder.group(updateFormControls);
  }


  ngOnInit(): void {
  }
  get id(){return this.updateprod.get('id')}
  get name(){return this.updateprod.get('name')}
  updateUser(){
    console.log(this.updateprod.value);
  }
}
