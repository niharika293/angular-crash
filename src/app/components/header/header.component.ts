import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title : String = 'Tasks Tracker';
  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    console.log("Adding task");
  }

}
