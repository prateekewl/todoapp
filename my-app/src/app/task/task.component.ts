import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public tasks: Array<any> = [];
  public taskName = "";
  public taskDesc = "";
  public taskDate = "";
  public taskStatus = "";
  public taskId = "";
  public showUpdate: boolean = false;
  constructor(private http: Http) {
    this.getAllTasks();
  }

  ngOnInit() {
  }

  // register() {
  //   this.http.post("http://localhost:3000/api/register", {"email": this.email, "password": this.pwd, "firstname": this.firstname, "surname": this.surname, "phonenumber": this.phonenumber}).pipe(
  //     map(response => response.json())
  //   ).subscribe(
  //     pr => {
  //       console.log(pr);
  //       console.log(pr.status);
  //       console.log(pr.msg);
  //       console.log(pr.data);
  //       // this.apiData = pr;
  //     }
  //   );
  // }

  delTask(task){
    this.http.post("http://localhost:3000/api/task/delete", {id: task._id}).pipe(
      map(response => response.json())
    ).subscribe(
      res => {
        console.log(res);
        this.getAllTasks();
      }
    );
  }

  update() {
    let updatedTask = {
      id: this.taskId,
      name: this.taskName,
      description: this.taskDesc,
      lastDate: this.taskDate,
      status: this.taskStatus
    };

    this.http.post("http://localhost:3000/api/task/update", updatedTask).pipe(
      map(response => response.json())
    ).subscribe(
      pr => {
        console.log(pr);
        this.getAllTasks();
        this.showUpdate = false;
        this.taskStatus = "";
        this.taskDesc = "";
        this.taskDate = "";
        this.taskName = "";
        this.taskId = "";
      }
    );
  }

  editTask(task) {
    this.taskName = task.name;
    this.taskDate = task.lastDate;
    this.taskDesc = task.description;
    this.taskStatus = task.status;
    this.taskId = task._id
    this.showUpdate = true;
  }

  addTask() {
    let newTask = {
      name: this.taskName,
      description: this.taskDesc,
      lastDate: this.taskDate,
      status: this.taskStatus
    };

    this.tasks.push(newTask);
    console.log(this.tasks);

    this.http.post("http://localhost:3000/api/task/add", newTask).pipe(
      map(response => response.json())
    ).subscribe(
      pr => {
        console.log(pr);
        this.taskStatus = "";
        this.taskDesc = "";
        this.taskDate = "";
        this.taskName = "";
        this.taskId = "";
      }
    );
  }

  getAllTasks() {
    this.http.get("http://localhost:3000/api/task/getAll").pipe(
      map(response => response.json())
    ).subscribe(
      res => {
        console.log(res);
        this.tasks = res.data;
      }
    );
  }
}
