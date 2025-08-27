import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User implements OnInit {

  http = inject(HttpClient);

  userList: any[] = [];

  //to create reactive form
  //userform: FormGroup = new FormGroup ({});

  userobj: any = {
    
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers () {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any) => {
      this.userList = res;
    });
  }

  onSaveUser() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userobj).subscribe({
      next:(result) => {
        debugger;
        alert("created successfully");
        this.getUsers();

      }, 
      error:(error) => {
        debugger;
        alert("unsuccessful -" + error.error.message);
      }
    })
  }

  onEdit(item: any) {
    this.userobj = item;
  }

  onUpdateUser() {
    this.userobj.createDate = new Date();
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userobj.userId, this.userobj).subscribe({
      next: () => {
        debugger;
        alert("created successfully");
        this.getUsers();
      },
      error: (error) => {
        debugger;
        alert("unsuccessful -" + error.error.message);
      }
    })
  }

  onDelete(id: number) {
    const isdelete = confirm("Are you sure you want to delete?")
    if (isdelete) {
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
      next: () => {
        debugger;
        alert("deleted successfully");
        this.getUsers();
      },
      error: (error) => {
        debugger;
        alert("unsuccessful -" + error.error.message);
      }
    })
  }

    else {
      
    }
  }

  onReset() {
    this.userobj = {
    
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""

  }
  }

}
