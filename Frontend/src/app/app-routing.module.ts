import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRoomComponent } from './new-room/new-room.component';
import { EnterRoomComponent } from './enter-room/enter-room.component';
import { HelpComponent } from './help/help.component';
import { RoomComponent } from './roomview/room/room.component';
import { BeveragesComponent } from './roomview/beverages/beverages.component';
import { FoodComponent } from './roomview/food/food.component';
import { EntertainmentComponent } from './roomview/entertainment/entertainment.component';
import { UserManagementComponent } from './roomview/user-management/user-management.component';
import { LocationComponent } from './roomview/location/location.component';
import { GiftComponent } from './roomview/gift/gift.component';

const routes: Routes = [
  { path: 'create', component: NewRoomComponent },
  { path: 'enter', component: EnterRoomComponent},
  { path: 'help', component: HelpComponent},
  { path: 'room/:id', 
    component: RoomComponent,
    children: [
      {path: '', redirectTo: 'beverages', pathMatch: 'full'},
      {path: 'beverages', component: BeveragesComponent},
      {path: 'food', component: FoodComponent}, 
      {path: 'entertainment', component: EntertainmentComponent},
      {path: 'location', component: LocationComponent},
      {path: 'user-management', component: UserManagementComponent},
      {path: 'gift', component: GiftComponent}
    ]
  },
  { path: '',  redirectTo: '/create', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }