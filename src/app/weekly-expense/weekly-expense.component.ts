import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-weekly-expense',
  templateUrl: './weekly-expense.component.html',
  styleUrls: ['./weekly-expense.component.css']
})
export class WeeklyExpenseComponent implements OnInit {
  date: Date = new Date();
  numericMonth: Number;
  year: any;
  wordMonth?: String|number;
  months = {
    1: 'January',
    2: 'Febuary',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'Jully',
    8: 'August',
    9: 'September',
    10:'October',
    11:'November',
    12:'December'
  };

  item:String = "Biscuit";
  price:Number = 200;
  constructor() { 
    this.numericMonth = this.date.getMonth() + 1;
    this.year = this.date.getFullYear();

    //getting the month in words from the array
    if(this.numericMonth > 3){
      this.wordMonth = this.months[5];
      console.log(this.wordMonth)
    }
  }

  ngOnInit(): void {
  }

}
