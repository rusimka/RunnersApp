import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Event} from "../../models/event";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {EventService} from "../../services/event-service/event.service";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UploadTaskSnapshot} from "@angular/fire/compat/storage/interfaces";
import {finalize, Observable} from "rxjs";
import {TokenStorageService} from "../../services/token-storage/token-storage.service";


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
  downloadURL! : Observable<String>
  firebaseUrl! : string;
  currentUser: any;

  // @ts-ignore
  @ViewChild('eventForm') eventForm: NgForm; // here we are getting the reference eventForm in  ts file
  // also try the code without this and see what's going to happen ??


  constructor(private eventService: EventService,
              private angularFireStorage : AngularFireStorage,
              private snackBar: MatSnackBar,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.event.userId = this.currentUser.id;
    console.log(this.event.userId);

  }


  onFileChange(file: any) {
    this.eventPhotoName = file.target.files[0].name;
    this.photo = file.target.files[0];
    this.uploadImageToFirebase(this.photo); // first we are saving the image in firebase, this is working probably fine
  }

   saveEvent() {
    console.log(this.firebaseUrl);
    this.event.eventPhotoUrl = this.firebaseUrl; //  probaj bez firebase url , mozhe so eventphoto url
    this.eventService.addEvent(this.event.eventName,  this.firebaseUrl, this.event.eventDescription, this.event.eventCity, this.event.eventCountry, this.event.eventDate, this.event.eventRegistrationLink, this.event.userId).subscribe(data => {
      this.successMessage = data.message;
      console.log(this.successMessage)
      this.openSnackBar(this.successMessage);
      this.eventForm.resetForm();
    });

  }

   uploadImageToFirebase(photo: File) {
    const fileRef = this.angularFireStorage.ref(this.eventPhotoName);
    const task = this.angularFireStorage.upload(this.eventPhotoName, photo);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.eventService.addEventPhotoUrl(this.downloadURL).subscribe(data => {
          // @ts-ignore
          this.firebaseUrl = data;
        });
      })).subscribe();

  }

   openSnackBar(successMessage: string) {
     this.snackBar.open(successMessage, '',{
       duration: 3000
     });
  }

}

