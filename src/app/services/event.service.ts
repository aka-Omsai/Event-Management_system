import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

const baseUrl = 'http://localhost:3000/api/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(baseUrl);
  }

  get(id: any): Observable<Event> {
    return this.http.get<Event>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByEventName(eventName: any): Observable<Event[]> {
    return this.http.get<Event[]>(`${baseUrl}?eventName=${eventName}`);
  }

  findByEventType(eventType: any): Observable<Event[]> {
    return this.http.get<Event[]>(`${baseUrl}?eventType=${eventType}`);
  }

}
