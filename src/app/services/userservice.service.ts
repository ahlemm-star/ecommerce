import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseurl = "https://itbs-backend.herokuapp.com";
  private loginUserUrl = this.baseurl + "/user/login";
  private getOneuserUrl=this.baseurl+"/user/one/"
  constructor(private http: HttpClient) {



  }
  signinUser(datafromsigninform) {
    let datafromAPI = this.http.post<any>(this.loginUserUrl, datafromsigninform)
    return datafromAPI
  }
  getUser(id){
    let datafromAPI = this.http.get<any>(this.getOneuserUrl+id)
    return datafromAPI
  }
  isloginadmin() {
    let token = localStorage.getItem("my token")
    if (!token) {
      return false
    }
    else {
      const helper = new JwtHelperService
      const decodedtoken = helper.decodeToken(token);
      if (decodedtoken.role == "admin") {
        return true;
      }
      else { return false }
    }
  }
  isloginuser() {
    let token = localStorage.getItem("my token")
    if (!token) {
      return false
    }
    else {
      const helper = new JwtHelperService
      const decodedtoken = helper.decodeToken(token);
      if (decodedtoken.role == "user") {
        return true;
      }
      else { return false }
    }
  }
  isloggedin() {
    let token = localStorage.getItem("mytoken")
    if (!token) {
      return false
    }
    else {
      return true
     // const helper = new JwtHelperService
     // const decodedtoken = helper.decodeToken(token);
    }
  }
}