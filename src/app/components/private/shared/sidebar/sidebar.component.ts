import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isAdmin:boolean;
  public isClient:boolean;

  constructor(private _userService:UserserviceService) {

   }

  ngOnInit(): void {
    this.isAdmin=this._userService.isloginadmin();
    this.isClient=this._userService.isloginuser();

  }

}
