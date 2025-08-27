import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.scss'
})
export class Controlflow {
  istextvisible: boolean = false;

  month: string = "jan";

  cityList = ["lagos", "abuja", "PH", "kogi"];

  stdList: any[] = [
    {name: "aaa", city: 'lagos', isActive: false },
    {name: "bbb", city: 'abuja', isActive: true },
    {name: "CCC", city: 'ph', isActive: false }
  ]

  showT() {
    this.istextvisible = false;
  }

  hideT () {
    this.istextvisible = true;
  }
  
}
