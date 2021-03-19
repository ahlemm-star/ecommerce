import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('mytoken');
    this._router.navigateByUrl("/signin")
  }

}