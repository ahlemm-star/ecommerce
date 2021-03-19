import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"
import { Route } from '@angular/compiler/src/core';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signForm: FormGroup
  public errormessage:String=""

  constructor(builder: FormBuilder, private _userservice: UserserviceService, private _router: Router) {

    let signFormControls = {
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])

    }
    this.signForm = builder.group(signFormControls);
  }


  ngOnInit(): void {
    if(this._userservice.isloggedin()){
      this._router.navigateByUrl('/dashboard');
    }

  }
  get email() { return this.signForm.get('email') }
  get password() { return this.signForm.get('password') }
  signUser() {
    console.log(this.signForm.value);
    let data = this.signForm.value
    this._userservice.signinUser(data).subscribe(
      result => {
        console.log(result); //{token:""}
        localStorage.setItem("mytoken", result.token)
        this._router.navigateByUrl("/dashboard")
      },
      err => {
        console.log(err);
        this.errormessage=err.error.message
      }

    )
    /* this._http.post<any>("https://washapp-apis.herokuapp.com/client/login", data)
       .subscribe(
         (result) => { console.log(result);
         localStorage.setItem("mytoken",result.token)
         this._router.navigateByUrl("/dashboard")
 
         },
         (error) => { console.log(error) }
 
       )
 */


  }

}
