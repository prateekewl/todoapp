import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeader implements OnInit {

  title: string = "My Project";
  nameOfProject = "Some Name";
  constructor() { }

  ngOnInit() {
  }

  }
