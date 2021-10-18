import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  no1:string ="" 
  no2:string="" 
  ans:number = 0 
  ngOnInit(): void {
  }

  add(){
    
    this.ans = parseInt(this.no1)+  parseInt(this.no2)
    console.log(this.ans);

  }

}
