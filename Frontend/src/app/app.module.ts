import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatStepperModule, MatStepper} from '@angular/material/stepper';
import { NewRoomComponent } from './new-room/new-room.component';
import { EnterRoomComponent } from './enter-room/enter-room.component';
import { HelpComponent } from './help/help.component';
import { RoomComponent } from './roomview/room/room.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule} from '@angular/common/http';
import { RoomService } from './services/room/room.service';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderComponent } from './roomview/header/header.component';
import { IconbarComponent } from './roomview/iconbar/iconbar.component';
import { UserManagementComponent } from './roomview/user-management/user-management.component';
import { BeveragesComponent } from './roomview/beverages/beverages.component';
import { EntertainmentComponent } from './roomview/entertainment/entertainment.component';
import { FoodComponent } from './roomview/food/food.component';
import { LocationComponent } from './roomview/location/location.component';
import { GiftComponent } from './roomview/gift/gift.component';
import { MatCardModule, MatDialogModule, MatTooltipModule } from '@angular/material';
import { AddUserDialogComponent } from './roomview/user-management/add-user-dialog/add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewRoomComponent,
    EnterRoomComponent,
    HelpComponent,
    RoomComponent,
    HeaderComponent,
    IconbarComponent,
    UserManagementComponent,
    BeveragesComponent,
    EntertainmentComponent,
    FoodComponent,
    LocationComponent,
    GiftComponent,
    AddUserDialogComponent
  ],
  entryComponents: [AddUserDialogComponent],
  imports: [
    FormsModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
