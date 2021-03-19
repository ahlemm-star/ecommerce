import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
categorielist=[
  {id:1,name:"cat1"},
  {id:2,name:"cat2"},
  {id:3,name:"cat3"},
  {id:4,name:"cat4"}
]
public categories:any[]=[]
  constructor(private _categoryService:CategoryService) { }

  ngOnInit(): void {
  this.getAllcategories()
  }
  getAllcategories(){
    this._categoryService.getallcategories().subscribe(
      (result)=>{
        this.categories=result

      },
      (error)=>{
        console.log(error)
      }
    )
  }
  delete(cat)
  {
    let index=this.categorielist.indexOf(cat);
    this.categorielist.splice(index,1);
    this._categoryService.deletecategorie(cat._id).subscribe(
      (result)=>{
        this.getAllcategories()
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
