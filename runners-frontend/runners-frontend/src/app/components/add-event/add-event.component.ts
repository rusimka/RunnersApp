import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Event} from "../../models/event";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {EventService} from "../../services/event-service/event.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event = new Event();
  eventPhotoName! : string;
  photo! : File;
  successMessage!: string;


  // @ts-ignore
  @ViewChild('eventForm') eventForm: NgForm; // here we are getting the reference eventForm in  ts file


  constructor(private eventService: EventService,
              private angularFireStorage : AngularFireStorage,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }


  onFileChange(file: any) {
    this.eventPhotoName = file.target.files[0].name;
    this.photo = file.target.files[0];
  }

  saveEvent() {
    this.eventService.addEvent(this.event.eventName,this.eventPhotoName, this.event.eventDescription,this.event.eventCity, this.event.eventCountry, this.event.eventDate, this.event.eventRegistrationLink).subscribe(data => {
      this.successMessage = data.message;
      console.log(this.successMessage)
      if (this.photo != null) {
        this.uploadImageToFirebase(this.photo);
      }
      this.openSnackBar(this.successMessage);
      this.eventForm.resetForm();
    });

  }

  uploadImageToFirebase(photo: File) {
    this.angularFireStorage.upload(this.eventPhotoName,photo);

  }

   openSnackBar(successMessage: string) {
     this.snackBar.open(successMessage, '',{
       duration: 3000
     });
  }
}

