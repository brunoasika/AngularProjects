import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyServiceService } from '../services/home.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  message: string = "";
  posts: any;
  constructor(private myService: MyServiceService) {}
  

  ngOnInit() {
    this.message = this.myService.sayHello();
    console.log(this.message);

    this.myService.getPosts().subscribe({
      next: (data: any) => {
        this.posts = data;
        console.log('Data received:', data);
      },
      error: (err: any) => {
        console.error('Error fetching posts:', err);
      }
    });
    
    
  }
}

