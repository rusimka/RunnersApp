import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "../../models/event";
import {Observable} from "rxjs";



const ADD_EVENT_API_URL = "http://localhost:8081/add-event"
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  addEvent(eventName: string , eventPhotoName: string, eventDescription: string, eventCity: string, eventCountry: string, eventDate: Date, eventRegistrationLink: string) : Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post(`${ADD_EVENT_API_URL}`, {eventName,eventPhotoName,eventDescription,eventCity,eventCountry,eventDate,eventRegistrationLink}, {'headers': headers}); // vaka funkcionira

  }
}
