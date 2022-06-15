import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage/token-storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

/*
This Component gets current User from Storage using TokenStorageService and show information (username, token, email, roles).
 */
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
  }

}
