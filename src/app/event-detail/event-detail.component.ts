import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEvent: Event = {
    eventName: '',
    eventType: '',
    organisationName: '',
    eventAddress: '',
    eventDate: '',
    eventTime: '',
    eventPoster: '',
    eventDescription: ''
  };

  message = '';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  date: any;
  today:any = new Date()

  // editeventName = false;

  ngOnInit(): void {
    

    if(!this.viewMode) {
      this.message = '';
      this.getEvent(this.route.snapshot.params["id"]);
    }

    this.today = new Date(this.today.setDate(this.today.getDate() + 1)).toISOString().split('T')[0];
    document.getElementsByName("date")[0].setAttribute('min', this.today);
  }

  getEvent(id: string): void{
    this.eventService.get(id)
    .subscribe({
      next: (data) => {
        this.currentEvent = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateEvent(): void {
    this.message = '';

    this.eventService.update(this.currentEvent.id, this.currentEvent)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This event was updated successfully!';
          this.router.navigate(['/manage-events/eventsList']);
        },
        error: (e) => console.error(e)
      });
  }

  deleteEvent(): void {
    this.eventService.delete(this.currentEvent.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/manage-events/eventsList']);
        },
        error: (e) => console.error(e)
      });
  }

  goBack(){
    this.router.navigate(['/manage-events/eventsList']);
  }



  // ngOnChanges(){
  //   this.editeventName = false
  // }

  // oneventNameClick(){
  //   this.editeventName = true
  // }

}
