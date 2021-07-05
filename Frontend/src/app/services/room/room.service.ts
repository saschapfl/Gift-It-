import { Injectable } from '@angular/core';
import { Room } from '../../contracts/room';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
  

export class RoomService {

  public roomsURL = 'http://localhost:11995/rooms/';
  
  constructor(private httpClient : HttpClient) { }

   
  
  public getRoom(id: number) : Observable<Room>{
   
    return this.httpClient.get<Room>(this.roomsURL + "getRoomById/" + id);
  }

  public addRoom(room: Room):Observable<Room>{
    return this.httpClient.post<Room>(this.roomsURL, room);
  }

  public updateRoom(room: Room): Observable<Room>{
    return this.httpClient.put<Room>(this.roomsURL, room)
  }
}
