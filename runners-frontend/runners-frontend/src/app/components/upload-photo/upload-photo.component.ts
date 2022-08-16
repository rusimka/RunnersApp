import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EventService} from "../../services/event-service/event.service";

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {


  uploadForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private eventService: EventService) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }


  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // @ts-ignore
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', this.uploadForm.get('profile').value);
    // this.eventService.uploadEventPhoto(formData).subscribe(data => {
    //   console.log(data);
    // });
  }

}
