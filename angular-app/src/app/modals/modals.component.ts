import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
}
