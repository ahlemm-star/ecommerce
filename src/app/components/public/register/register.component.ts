import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  /**form group**/
  public registreForm: FormGroup
  constructor(builder: FormBuilder) {
    let registreFormControls = {
      firstname: new FormControl("", [
        Validators.required,
        Validators.minLength(3),

        Validators.pattern("[A-Z][A-Za-z 'éç]*")
      ]),
      lastname: new FormControl("", [Validators.required]),
      birthday: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("", [Validators.required]),
      repeatpassword: new FormControl("", [Validators.required]),
    }
    
    this.registreForm = builder.group(registreFormControls);
  }

  ngOnInit(): void {

  }
  get firstname() { return this.registreForm.get('firstname') }
  get lastname() { return this.registreForm.get('lastname') }
  get birthday() { return this.registreForm.get('birthday') }
  get gender() { return this.registreForm.get('gender') }
  get email() { return this.registreForm.get('email') }
  get password() { return this.registreForm.get('password') }
  get repeatpassword() { return this.registreForm.get('repeatpassword') }
  registerUser() {
    console.log(this.registreForm.value);
  }


}
