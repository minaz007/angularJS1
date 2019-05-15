import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-header',  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myRoute: Router) { }

  ngOnInit() {
   }


   logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.myRoute.navigate(["/login"]);
}
}
