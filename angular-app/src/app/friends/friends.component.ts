import { Component, OnInit } from '@angular/core';

import { Friend } from '../friend';
// import { Friends } from '../mock-friends';
import { FriendService } from '../friend.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  
  friends: Friend[];
  
  selectedfriend: Friend;
  
  onselect(friend:Friend):void {
    this.selectedfriend = friend;
  }

  getFriends(): void {
    this.friendService.getFriends().subscribe(friends => {
      console.log(friends)
      this.friends = friends });
      this.http.get('http://172.16.0.77:4000/getFriends').subscribe((d) => {
        console.log(d);
      })
  }

  constructor(private http: HttpClient, private friendService: FriendService) { }

  ngOnInit() {
    this.getFriends();
  }

}
