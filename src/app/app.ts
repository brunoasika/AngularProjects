import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';
import { HttpClient } from '@angular/common/http';
import { Getapi } from './getapi/getapi';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  RouterLink],
  templateUrl: './app.html', 
  styleUrl: './app.scss'
})
// export class App implements OnInit{
  export class App  {
  protected readonly title = signal('angular-app01');
  
  }
  /* public data: any;
  constructor (private http: HttpClient) {

  }

  ngOnInit(): void {
    
    this.fetchDetails();
  }

  public fetchDetails () {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (resp:any) => {
        console.log(resp);
        this.data = resp;
      }
    )
  } */

