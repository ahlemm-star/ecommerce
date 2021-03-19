import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {
produitlist=[
    {id:1,name:"prod1",description:"a"},
    {id:2,name:"prod2",description:"a"},
    {id:3,name:"prod3",description:"a"},
    {id:4,name:"prod4",description:"a"}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  delete(prod)
  {
    let index=this.produitlist.indexOf(prod);
    this.produitlist.splice(index,1);
  }
}
