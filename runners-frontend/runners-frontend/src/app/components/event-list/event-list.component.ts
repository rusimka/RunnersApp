import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event-service/event.service";
import {Event} from "../../models/event";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(data => {
      this.events = data;
      console.log(this.events);

    });

  }

}
