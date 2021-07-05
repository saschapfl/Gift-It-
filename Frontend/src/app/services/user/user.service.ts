import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Room } from 'src/app/contracts/room';
import { User } from 'src/app/contracts/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private createUserUrl = 'http://localhost:8080/createUser/';
  private updateUserUrl = 'http://localhost:8080/updateUser/';
  private getAllUsersUrl = 'http://localhost:8080/getAllUsersForRoom/';
  private getUserUrl = 'http://localhost:8080/getUserById/';
  
  constructor(private httpClient : HttpClient) { }

   
  
  public getUser(id: number) : Observable<User>{
   
    return this.httpClient.get<User>(this.getUserUrl + id);
  }

  public createUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.createUserUrl, user);
  }

  public updateUser(user: User):Observable<User>{
    return this.httpClient.put<User>(this.updateUserUrl, user);
  }

  public getAllUsersForRoom(roomId : number) : Observable<User[]>{
    return this.httpClient.get<User[]>(this.getAllUsersUrl + roomId);
  }
}
