import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public lists = [];

  constructor(public listService: ListService,  private router: Router) { }

  ngOnInit() {
    this.listService.getLists().subscribe(
      (res)=> {


        this.lists = res['data'];
      }
    )


  }

  logout(){

    this.router.navigate(['/']);
  }

}
