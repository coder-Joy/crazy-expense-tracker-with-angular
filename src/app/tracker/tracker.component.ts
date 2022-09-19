import { Component, OnInit } from '@angular/core';
import { WeeklyExpenseComponent } from '../weekly-expense/weekly-expense.component';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  id: Number = 0;
  items?: Text;
  showNotification(){
   const notification = new Notification("New notification from my app!!",{
    body: "The item has been added to the list. See ya!!✋🖐",
    tag: "This is the tag which I dont know the use",
    silent: false,
    requireInteraction: false,
    vibrate: [200,400, 200]
  })
  navigator.vibrate(200)
  }
  requestPermition(){
    if(Notification.permission == "granted"){
      this.showNotification();
    }else if(Notification.permission !== "denied"){
      Notification.requestPermission().then(permi =>{
        this.showNotification()
      })
    }else{

    }
  }
  adder(){

  }
  saver(){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
