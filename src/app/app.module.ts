import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutComponent } from './about/about.component';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { FooterComponent } from './footer/footer.component';
import { MyEventListComponent } from './my-event-list/my-event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SafePipe } from './safe.pipe';
import { AddEventComponent } from './add-event/add-event.component';
import { ManageHeaderComponent } from './manage-header/manage-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventsComponent,
    NotificationComponent,
    AboutComponent,
    ManageEventComponent,
    FooterComponent,
    MyEventListComponent,
    EventDetailComponent,
    SafePipe,
    AddEventComponent,
    ManageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
