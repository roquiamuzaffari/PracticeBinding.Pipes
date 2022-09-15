import { Component, OnInit } from '@angular/core';
//import userData from '../user.json';
interface user{
  id:number;
  firstName:string;
  email:string;
  password:string;
}
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
isUserLoggedIn=true;
isUserLoggedOut=true;
username="Welcome";
title="welcome to 2 ways data binding";
month=12;
colVal=2;
lowreCaseex ="ROQUIA";
dateExample = Date.now();
currencyExample=125;
percentExample=0.976656;
products='abc';
jsonExample={firstName:"Rohit",lastName:"Sharma"};
contact={'firstName':'Rohit','lastName':'Sharma'};
users=[
  

  {
    "id":2,"firstName":"sonu","lastName":"Sharma"},

  {
    "id":3,"firstName":"Anki","lastName":"Gupta"},

  {
    "id":4,"firstName":"chotu","lastName":"Priya"}
];
sayHi(){
  console.log("Hi from Roquia Muzaffari");
}
highlightBGcolor(a:any,b:any,c:any){
  console.log("hi i am being highlighted"+a+b+c);
}
inputBox(){
  console.log("This is input box");
}
product='abc';
  constructor() { }
  
  ngOnInit(): void {
    
  }

}