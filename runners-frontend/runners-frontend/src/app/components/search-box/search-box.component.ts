import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  enteredSearchValue!: string;

  // this is event emitter property, this properties raises
  // event of type string, this is property for creating custom event
  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  // this function will raise the event searchTextChange
  onSearchTextChange() {
    this.searchTextChanged.emit(this.enteredSearchValue);
    // whenever this event will be raised we want to emit the entered
    //search value
  }



}
