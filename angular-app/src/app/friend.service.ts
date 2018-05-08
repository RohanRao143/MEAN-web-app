import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Friend } from './friend';
// import {Friends} from './mock-friends';
import { MessageService } from './message.service';

//injectable decorators are used to inject themself to other services
@Injectable()
export class FriendService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private friendsUrl = 'api/friends'

  getFriends(): Observable<Friend[]> {
    this.messageService.add('FriendService: fetched friends');

    // return this.http.get<Friend[]>(http://172.16.0.77:4000this.friendsUrl)
    return this.http.get<Friend[]>('/node_api/getFriends');
  }

  getFriend(id: number): Observable<Friend[]> {

    // TODO: send the message _after_ fetching the friend
    this.messageService.add(`FriendService: fetched friend id=${id}`);

    //return of(Friends.find(friend => friend.id === id));
    return this.http.get<Friend[]>(this.friendsUrl)
  }

  addFriend(data) {

    //Headers has to be set inorder to pass the data to backend for the post services.
    let header = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' });

    console.log(data)

    this.http.post('node_api/addfriend', data).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });

  }

  deleteFriend(data) {

    let header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

    this.http.post('node_api/deletefriend/' + data, {}, { headers: header }).subscribe(
      (val) => {
        console.log("Friend has been successfully deleted",
          val);
      },
      response => {
        console.log("Error in deleting user", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }

  private log(message: string) {
    this.messageService.add('Friend Service:' + message);
  }

}
