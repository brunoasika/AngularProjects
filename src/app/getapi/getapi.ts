import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-getapi',
  imports: [],
  templateUrl: './getapi.html',
  styleUrl: './getapi.scss'
})
export class Getapi implements OnInit{
  http = inject(HttpClient);
  dataList: any [] = [];

    ngOnInit(): void {
    debugger;
    this.getUsers();
  }

  getUsers() {
    debugger;
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((result: any) => {
      debugger;
      
      this.dataList = result.data;
    })
  }

}
