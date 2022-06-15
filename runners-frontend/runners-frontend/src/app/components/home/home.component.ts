import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user-service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/*
Our Home Component will use UserService to get public resources from back-end.

 */
export class HomeComponent implements OnInit {

  content?: string;

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      error => {
        this.content = JSON.parse(error.error).message;
      });
  }

  constructor(private userService: UserService) { }

}
