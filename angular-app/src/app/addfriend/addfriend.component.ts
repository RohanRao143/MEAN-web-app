import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {
  name;number;

  hobby = "";

  hobbies = []

  constructor(private friendService:FriendService ,private http:HttpClient, private location:Location, public router:Router) { }

  ngOnInit() {
  }

  addHobby(){
    if(this.hobby)
        this.hobbies.push(this.hobby);
    this.hobby = ''  
  }

  onKey(event:any){
    this.hobby = event.target.value
  }

  addFriend(){
    this.friendService.addFriend({name:this.name,number:this.number,hobbies:this.hobbies});
    this.router.navigateByUrl('/dashboard');
  }

}
