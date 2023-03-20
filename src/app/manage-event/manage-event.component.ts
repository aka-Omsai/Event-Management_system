import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.css'],
})
export class ManageEventComponent implements OnInit {


  event: Event = {
    eventName: '',
    eventType: '',
    organisationName: '',
    eventAddress: '',
    eventDate: '',
    eventTime: '',
    eventPoster: '',
    eventDescription: ''
  };

  submittedNewEvent = false;


  // selectedEvent: Event | undefined;

  constructor(private auth: AuthenticationServiceService, private eventService: EventService, private router:Router) { }

  saveEvent(): void {
    const data = {
      eventName: this.event.eventName,
      eventType: this.event.eventType,
      organisationName: this.event.organisationName,
      eventAddress: this.event.eventAddress,
      eventDate: this.event.eventDate,
      eventTime: this.event.eventTime,
      eventPoster: this.event.eventPoster,
      eventDescription: this.event.eventDescription,
    };

    this.eventService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submittedNewEvent = true;
        },
        error: (e) => console.error(e)
      });
  }

  newEvent(): void {
    this.submittedNewEvent = false;
    this.event = {
      eventName: '',
      eventType: '',
      organisationName: '',
      eventAddress: '',
      eventDate: '',
      eventTime: '',
      eventPoster: '',
      eventDescription: ''
    };
  }

  addAnEvent = false

  danger = false
  warning = true
  submitted = false

  login(object: any) {

    let access = this.auth.validateLogin(object.username, object.password)

    if (access == 200) {
      this.warning = false
      this.danger = false
      this.submitted = true

      // this.loginStatus = this.auth.setMessage(this.submitted)

    }

    else if (access == 403) {
      this.danger = true
      this.warning = false
    }
  }

  date: any;

  // public events: Event[] |undefined;

  // events: Event[] | undefined
  // [
  //   { "_id": "1", 
  //   "eventName": "Honouring the Armed forces", 
  //   "eventType": "Tech Talk", 
  //   "organisationName": "SSC", 
  //   "eventAddress": "BT Auditorium", 
  //   "eventDate": "2022-11-31", 
  //   "eventTime": "12:00", 
  //   "eventPoster": "https://pbs.twimg.com/media/FfemiqiaEAEvT7g?format=jpg&name=small", 
  //   "eventDescription": "The day is meant to honour martyrs, and the brave soldiers that serve this country. Also known as India’s Flag Day, the day is dedicated to raising funds from Indian citizens for the welfare of the Indian Army" 
  // },

  //   { "_id": "2", 
  //   "eventName": "FUN week", 
  //   "eventType": "Cultural", 
  //   "organisationName": "SSC", 
  //   "eventAddress": "BT Auditorium", 
  //   "eventDate": "2023-1-31", 
  //   "eventTime": "17:00", 
  //   "eventPoster": "https://img.freepik.com/free-vector/modern-fashion-week-poster-template_1361-1250.jpg?w=2000", 
  //   "eventDescription": "✨Greetings from ACSES✨ Hello everyone!!!!! Hope you are all doing well🤩 Are you all overtired with this routine of yours?!! Reviews,projects,assignments,labs and what not!?!😔 Well,don’t you guys worry!! Cuz ACSES got you!!!🤩🥳🥳 A whole week filled with fun,recreation games and excitement!!🤩🤩🤩 Yes!!Finally a Cultural event just like the way you wanted✨🤩 The “FUN WEEK”🥳🥳 We are super pumped up about this week!!😍💯⚡ We are sure you guys are looking forward to this week!!!⚡🥳 Also,cherry on the cake😉  At the end of this week,The best division will be awarded with an exciting prize!!🥳🤩 Regards, ACSES🙌🏻"
  //  },
  // ];

  ngOnInit() {
    this.date = new Date().toISOString().slice(0, 10) +1;

    // this._eventService.getEvents()
    //    .subscribe({ 
    //     next:(data:any) => {
    //       this.events = data;
    //          console.log(data); },
    //          error: (e) => console.error(e)
    //     }
    //  {
    // _id: data._id,
    // eventName: data.eventName,
    // eventType?: String;
    // organisationName?: String;
    // eventAddress?: String;
    // eventDate?: any;
    // eventTime?: String;
    // eventPoster?: String;
    // eventDescription?: String;
    //  } 
    //  );
  }

  addEvent() {
    this.addAnEvent = !this.addAnEvent;
  }

  url = "./assets/upload.webp";

  onSelectFile(img: any) {
    if (img.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(img.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }



  // onSelectEvent(event: any) {
  //   this.selectedEvent = event;
  //   console.log(this.selectedEvent);
  // }

}
