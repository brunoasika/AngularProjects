import { Injectable } from '@angular/core'; //to register a service you need injection. you have to make it an injectable service
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({ //this is what makes it a service
  providedIn: 'root'
})
export class MyServiceService { //name of the service
    private apiUrl = 'https://localhost:7052/api/Users/GetUsers';
    //constructor() {}
    constructor(private http: HttpClient) {}
 
  sayHello() {
    return 'Hello from MyService!';
  }

  // GET request
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}