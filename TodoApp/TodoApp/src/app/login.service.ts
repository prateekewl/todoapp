import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    authenticate(username, Password) {
        let url = "http://localhost:3000/api/list/getAll"
        return this.http.get(url);
    }

}
