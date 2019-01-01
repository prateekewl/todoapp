import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
    tasks = [];
    taskForm: FormGroup;
    showErr: boolean = false;
    showUpdate: boolean = false;
    activeIndex: any;

    constructor(private data: DataService, public fb: FormBuilder) {
      this.taskForm = fb.group({
        title: ["", Validators.required],
        description: ["", Validators.required]
      });
    }

    ngOnInit() {
        this.reloadTasks();
    }

    reloadTasks() {
      this.data.getTasks().subscribe(
          res => this.tasks = res['data']
      );
    }

    addTask() {
      console.log(this.taskForm.value);
      if(this.taskForm.valid) {
        this.showErr = false;
        let newTask = {
          title: this.taskForm.value.title,
          description: this.taskForm.value.description
        }

        this.data.add(newTask).subscribe(
          res => {
            console.log(res);
            this.reloadTasks();
          },
          err => {
            console.log(err);
          }
        )

        this.taskForm.reset();
      }
      else {
        this.showErr = true;
      }
    }

    editTask(task) {
      this.taskForm.controls.title.setValue(task.title);
      this.taskForm.controls.description.setValue(task.description);
      this.showUpdate = true;
      this.activeIndex = task;
    }

    updateTask(task) {
      this.showUpdate = false;
      this.activeIndex.title = this.taskForm.value.title;
      this.activeIndex.description = this.taskForm.value.description;

      this.data.updateTask(this.activeIndex).subscribe(
        res => {
          console.log(res);
          this.reloadTasks();
          this.activeIndex = null;
        },
        err => {
          console.log(err);
        }
      )

      this.taskForm.reset();
    }

    showDelTaskModal(task) {
      this.activeIndex = task;
    }

    delTask() {
      // this.tasks.splice(this.activeIndex, 1);
      this.data.delTask({id: this.activeIndex._id}).subscribe(
        res => {
          console.log(res);
          this.reloadTasks();
          this.activeIndex = null;
        },
        err => {
          console.log(err);
        }
      )
      this.activeIndex = null;
    }

}
