import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events?: Event[];
  currentEvent: Event = {};
  currentIndex = -1;
  eventName = '';
  // eventType = 'Tech Talk';
  eventType = '';

  constructor(private eventService : EventService) 
  {}

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

  searcheventType(type:any): void {
    this.currentEvent = {};
    this.currentIndex = -1;

    this.eventService.findByEventType(type)
      .subscribe({
        next: (data) => {
          this.events = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  searchorganisationName(): void {

  }

}
