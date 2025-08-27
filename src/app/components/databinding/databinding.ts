import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.scss'
})
export class Databinding {
  name: string = "bru bru";

  age: number = 21;

  maxLength: number = 5;

  minchar: number = 3;

  inputType: string = "radio";

  coloroftext: string = "myColor";

  showMessage () {
    alert("this is the data binding page")
  }

  changecolor () {
    this.coloroftext = "color2";
  }
}
