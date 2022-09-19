import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-zone',
  templateUrl: './chat-zone.component.html',
  styleUrls: ['./chat-zone.component.css']
})
export class ChatZoneComponent implements OnInit {

  constructor() { }

  notification =  Notification;
  
  ngOnInit(): void {
  }

}
