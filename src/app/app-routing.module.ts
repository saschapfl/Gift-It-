import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRoomComponent } from './new-room/new-room.component';
import { EnterRoomComponent } from './enter-room/enter-room.component';
import { HelpComponent } from './help/help.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: 'create', component: NewRoomComponent },
  { path: 'enter', component: EnterRoomComponent},
  { path: 'help', component: HelpComponent},
  { path: 'room', component: RoomComponent},
  { path: '',  redirectTo: '/create', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
