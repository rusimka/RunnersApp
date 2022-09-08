import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EventService} from "../../services/event-service/event.service";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    // this.funckija1()
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue)); // tuka gi vrti site opcii i naoga opcija koja sto vklucuva vo sebe filterValue ona sto go pisuvame vo inputot
  }

  // async funckija1() {
  //   console.log("Function 1 entered: " )
  //   await this.funkcija2("rusimka");
  //
  //   console.log("function 1 done");
  // }
  //
  //
  //  async funkcija2(rusimka: string) {
  //   console.log("function 2 entered");
  //    for (let i = 0; i < rusimka.length; i++) {
  //      console.log(rusimka[i]);
  //      console.log("\n");
  //    }
  //    console.log("function 2 done");
  //
  // }
}
