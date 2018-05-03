import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Friend } from '../friend';
import { FriendService } from '../friend.service'

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit {

  @Input() friend: Friend;
  
  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService,
    private location: Location  
  ) { }

  ngOnInit() {
    this.getFriend();
  }

  getFriend():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.friendService.getFriends().subscribe(friends=>{
      this.friend = friends.find(friend=>friend.id==id)
    });
  }

  goBack(): void {
    this.location.back();
  }

}
