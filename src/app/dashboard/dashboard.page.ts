import { Component, OnInit } from '@angular/core';
import { Router,RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username:string;
  constructor() {
    }

  ngOnInit() {
    this.username=localStorage.getItem("UserName");
  }
  

 
}
