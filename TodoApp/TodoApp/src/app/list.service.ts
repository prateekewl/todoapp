import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    constructor(private http: HttpClient) { }

    getLists() {
        let url = "http://localhost:3000/api/list/getAll"
        return this.http.get(url);
    }

    add(list) {
        let url = "http://localhost:3000/api/list/add"
        return this.http.post(url, list);
    }

    updateList(list) {
        let url = "http://localhost:3000/api/list/update"
        return this.http.post(url, list);
    }

    delList(id) {
        let url = "http://localhost:3000/api/list/delete"
        return this.http.post(url, id);
    }
}
