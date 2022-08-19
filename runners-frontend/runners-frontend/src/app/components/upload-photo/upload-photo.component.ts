import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EventService} from "../../services/event-service/event.service";

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.funckija1()
  }

  async funckija1() {
    console.log("Function 1 entered: " )
    await this.funkcija2("rusimka");

    console.log("function 1 done");
  }


   async funkcija2(rusimka: string) {
    console.log("function 2 entered");
     for (let i = 0; i < rusimka.length; i++) {
       console.log(rusimka[i]);
       console.log("\n");
     }
     console.log("function 2 done");

  }
}
