import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { MyEventListComponent } from './my-event-list/my-event-list.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path:"" , redirectTo:"/home", pathMatch:'full'},
  { path:"home" , component:HomeComponent },
  { path:"events" , component:EventsComponent},
  { path:"notification" , component:NotificationComponent },
  { path:"about" , component:AboutComponent },
  { path:"manage-events" , component:ManageEventComponent },
  { path:"manage-events/eventsList", component:MyEventListComponent},
  { path:"manage-events/eventsList/:id" , component:EventDetailComponent },
  { path:"manage-events/addEvent", component:AddEventComponent},
  { path:"**" , redirectTo:"/home", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
