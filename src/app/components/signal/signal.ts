import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.scss'
})
export class Signal {
  first_name: string = "chidubem";

  // signal syntax 
  age = signal<number> (21); 

  lastname = signal ( "Asika");


  //computed signal 
  details = computed (() => this.lastname() + " is " + this.age() + " years old "); 

  // to change the signal value
  constructor () {
    //console.log(this.first_name);
    this.first_name = "michael";
    //console.log(this.first_name);
    //console.log(this.age());
    setTimeout(() => {
      this.age.set(22);
    }, 5000);
    
    //to view the signal result
    //console.log(this.age());
  }
}
