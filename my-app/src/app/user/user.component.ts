import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: Array<any> = [];
  public email = "";
  public fname = "";
  public lname = "";
  public pwd = "";
  public userId = "";
  public showUpdate: boolean = false;

  constructor(private http: Http) {
    this.getAllUsers();
  }

  ngOnInit() {
  }

  delUser(user){
    this.http.post("http://localhost:3000/api/users/delete", {id: user._id}).pipe(
      map(response => response.json())
    ).subscribe(
      res => {
        console.log(res);
        this.getAllTasks();
      }
    );
  }

  update() {
    let updatedUser = {
      id: this.userId,
      email: this.email,
      firstname: this.fname,
      lastname: this.lname,
      password: this.pwd
    };

    this.http.post("http://localhost:3000/api/users/update", updatedUser).pipe(
      map(response => response.json())
    ).subscribe(
      pr => {
        console.log(pr);
        this.getAllUsers();
        this.showUpdate = false;
        this.email = "";
        this.fname = "";
        this.lname = "";
        this.pwd = "";
        this.userId = "";
      }
    );
  }

  editUser(user) {
    this.email = user.email;
    this.fname = user.firstname;
    this.lname = user.lastname;
    this.pwd = user.password;
    this.userId = user._id; // modification
    this.showUpdate = true;
  }

  addUser() {
    let newUser = {
      email: this.email,
      firstname: this.fname,
      lastname: this.lname,
      password: this.pwd
    };

    this.users.push(newUser);
    console.log(this.users);

    this.http.post("http://localhost:3000/api/users/add", newUser).pipe(
      map(response => response.json())
    ).subscribe(
      pr => {
        console.log(pr);
        this.email = "";
        this.fname = "";
        this.lname = "";
        this.pwd = "";
        this.userId = "";
      }
    );
  }

  getAllUsers() {
    this.http.get("http://localhost:3000/api/users/getAll").pipe(
      map(response => response.json())
    ).subscribe(
      res => {
        console.log(res);
        this.users = res.data;
      }
    );
  }
}
