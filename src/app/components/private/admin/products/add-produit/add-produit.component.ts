import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {

  public prodForm: FormGroup
  constructor(builder:FormBuilder) { 
    let prodFormControls = {
      id: new FormControl("",Validators.required),
      name: new FormControl("",Validators.required),
     
    }
    this.prodForm =builder.group(prodFormControls);
  }


  ngOnInit(): void {
  }
  get id(){return this.prodForm.get('id')}
  get name(){return this.prodForm.get('name')}
 prodUser(){
    console.log(this.prodForm.value);
  }

}
