import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-my-event-list',
  templateUrl: './my-event-list.component.html',
  styleUrls: ['./my-event-list.component.css'],
})
export class MyEventListComponent implements OnInit {

  events?: Event[];
  currentEvent: Event = {};
  currentIndex = -1;
  eventName = '';

  constructor(private eventService : EventService) { }

  ngOnInit(): void {
    this.retrieveEvents();
  }

  retrieveEvents():void{
    this.eventService.getAll()
      .subscribe({
        next: (data) => {
          this.events = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList():void {
    this.retrieveEvents();
    this.currentEvent = {};
    this.currentIndex = -1;
  }

  setActiveEvent(event: Event, index: number): void {
    this.currentEvent = event;
    this.currentIndex = index;
  }

  removeAllEvents(): void {
    this.eventService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e) 
      });
  }

  searcheventName(): void {
    this.currentEvent = {};
    this.currentIndex = -1;

    this.eventService.findByEventName(this.eventName)
      .subscribe({
        next: (data) => {
          this.events = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
