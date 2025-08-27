import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe], //import pipes
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.scss'
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  divclassname = signal<string> ("");

  isdiv2active: boolean = false;

  firstname: string = "Bruno";
  courseStudied: string = "CSC";

  arrayList = [1,2,3,4,5,6,7,8,9,10]

  stdobj: any = {
    name: "bru bru",
    state: "imo",
    age: 22,
    favcolor: "black"

  }

  currdate: Date = new Date();

  constructor () {
    console.log("constructor");
  }

  // some used lifecycle hooks
  ngOnInit(): void {
    console.log("ngOnInit");
    // to trigger api calls 
    // to subscribe
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    // to deal with viewChild
    // to subscribe 
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    // to unsubscribe
    // to prevent users from navigating
  }

  setbgclass (classname: string) {
    this.divclassname.set(classname);
  }

  changediv2color() {
    this.isdiv2active = ! this.isdiv2active;
  }
}
