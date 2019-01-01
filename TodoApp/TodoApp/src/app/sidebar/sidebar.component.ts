import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public lists = [];

  constructor(public listService: ListService) { }

  ngOnInit() {
    this.listService.getLists().subscribe(
      (res)=> {


        this.lists = res['data'];
      }
    )


  }

}
