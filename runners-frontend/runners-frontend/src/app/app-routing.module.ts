import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {BoardUserComponent} from "./components/board-user/board-user.component";
import {BoardModeratorComponent} from "./components/board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./components/board-admin/board-admin.component";
import {AddModeratorComponent} from "./components/add-moderator/add-moderator.component";
import {AddEventComponent} from "./components/add-event/add-event.component";
import {UploadPhotoComponent} from "./components/upload-photo/upload-photo.component";
import {EventListComponent} from "./components/event-list/event-list.component";
import {UpdateEventComponent} from "./components/update-event/update-event.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // all public -- this should containt information about the page
  { path: 'login', component: LoginComponent }, // all public
  { path: 'register', component: RegisterComponent }, // all public
  { path: 'profile', component: ProfileComponent },
  // access to this endpoint should have all logged moderator user to see their events added
  { path: 'user', component: BoardUserComponent }, // delete this endpoint
  { path: 'mod', component: BoardModeratorComponent }, // delete this
  { path: 'admin', component: BoardAdminComponent }, // delete this
  { path: '', redirectTo: 'home', pathMatch: 'full'}, // this will redirect to home component
  { path : 'add-moderator', component: AddModeratorComponent }, // only admin
  { path: 'add-event', component: AddEventComponent }, // admin and moderator
  { path : 'upload-photo', component: UploadPhotoComponent }, // delete
  { path: 'events', component: EventListComponent}, // all users
  { path: 'update-event/:eventId', component: UpdateEventComponent} // admin and moderator 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
