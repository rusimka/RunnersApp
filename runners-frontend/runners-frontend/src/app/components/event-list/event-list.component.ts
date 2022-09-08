import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event-service/event.service";
import {Event} from "../../models/event";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap} from "rxjs";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  cities: string[] = [];
  searchText!: string;




  constructor(private eventService: EventService) {}

  ngOnInit(): void {

    this.eventService.getEventCities().subscribe(data => {
      this.cities = data;
      console.log(this.cities);
    })


      this.eventService.getAllEvents().subscribe(data => {
        this.events = data;
        console.log(this.events);
      });
    }


  searchByCity(searchText: string) {
    if (searchText.length == 0) {
      this.eventService.getAllEvents().subscribe(data => {
        this.events = data;
        console.log(this.events);
      });
    }
    this.eventService.getAllEventsForCity(searchText).subscribe((data: any) => {
      this.events = data;
    });

  }
}
