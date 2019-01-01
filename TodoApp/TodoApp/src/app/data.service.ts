import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    getTasks() {
        let url = "http://localhost:3000/api/task/getAll"
        return this.http.get(url);
    }

    add(task) {
        let url = "http://localhost:3000/api/task/add"
        return this.http.post(url, task);
    }

    updateTask(task) {
        let url = "http://localhost:3000/api/task/update"
        return this.http.post(url, task);
    }

    delTask(id) {
        let url = "http://localhost:3000/api/task/delete"
        return this.http.post(url, id);
    }
}
