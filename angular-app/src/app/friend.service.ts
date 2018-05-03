import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Friend } from './friend';
// import {Friends} from './mock-friends';
import { MessageService } from './message.service';

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

  private log(message: string) {
    this.messageService.add('Friend Service:' + message);
  }

}
