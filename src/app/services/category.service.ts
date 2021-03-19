import { Injectable } from '@angular/core';

import {HttpClient} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl="https://itbs-backend.herokuapp.com"
  private allcategoriesUrl=this.baseUrl+"/category/all"
  private deletecategoriesUrl =this.baseUrl+"/category/delete/"
  constructor(private http:HttpClient) {
  
   }
   getallcategories () {
    let datafromAPI = this.http.get<any>(this.allcategoriesUrl)
    return datafromAPI
}
deletecategorie(id){
  let datafromAPI = this.http.delete<any>(this.deletecategoriesUrl)
  return datafromAPI

}
}