import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "../../models/event";
import {Observable} from "rxjs";



const ADD_EVENT_API_URL = "http://localhost:8081/add-event"
const GET_ALL_EVENTS_API_URL = "http://localhost:8081/events"
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  addEvent(eventName: string , eventPhotoUrl: string, eventDescription: string, eventCity: string, eventCountry: string, eventDate: Date, eventRegistrationLink: string) : Observable<any> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post(`${ADD_EVENT_API_URL}`, {eventName,eventPhotoUrl,eventDescription,eventCity,eventCountry,eventDate,eventRegistrationLink}, {'headers': headers}); // vaka funkcionira
  }

  getAllEvents() : Observable<any> {
    return this.http.get(`${GET_ALL_EVENTS_API_URL}`)
  }

  addEventPhotoUrl(downloadURL: Observable<String>) {
    return downloadURL;

  }
}
