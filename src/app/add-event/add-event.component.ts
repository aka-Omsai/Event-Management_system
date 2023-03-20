import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  danger = false;

  today:any = new Date();

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

  constructor(private eventService: EventService, private router:Router) { }

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
          this.router.navigate(['/manage-events/eventsList']);
        },
        error: (e) => 
        {
          console.error(e);
          this.danger = true;
        }
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

  ngOnInit(): void {

    this.today = new Date(this.today.setDate(this.today.getDate() + 1)).toISOString().split('T')[0];
    document.getElementsByName("date")[0].setAttribute('min', this.today);

  }

  maxDate:any = "2025-11-11"

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


}
