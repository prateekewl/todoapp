import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testVar: string = "This is test variable";
  showElement: boolean = false;

  someArr: Array<number> = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  someArr2: Array<number> = [1, 2, 3, 4];
  someArr3: Array<number> = [2, 3, 5, 6, 8, 10, 12];

  apiData: any;

  email = "";
  pwd = "";
  firstname = "";
  surname = "";
  phonenumber = "";

  constructor(private http: Http) { }

  ngOnInit() {
  }

  callApi() {
    this.http.post("http://localhost:3000/api/test", {"email": this.email, "password": this.pwd, "firstname": this.firstname, "surname": this.surname, "phonenumber": this.phonenumber}).pipe(
      map(response => response.json())
    ).subscribe(
      pr => {
        console.log(pr);
        console.log(pr.status);
        console.log(pr.msg);
        // this.apiData = pr;
      }
    );
  }

  register() {
    this.http.post("http://localhost:3000/api/register", {"email": this.email, "password": this.pwd, "firstname": this.firstname, "surname": this.surname, "phonenumber": this.phonenumber}).pipe(
      map(response => response.json())
    ).subscribe(
      pr => {
        console.log(pr);
        console.log(pr.status);
        console.log(pr.msg);
        console.log(pr.data);
        // this.apiData = pr;
      }
    );
  }

  getAllUsers() {
    this.http.get("http://localhost:3000/api/users/list").pipe(
      map(response => response.json())
    ).subscribe(
      pr => {
        console.log(pr);
      }
    );
  }

  callApi2(){
    this.http.get("https://demo4244350.mockable.io/mock-api2").pipe(
      map(response => response.json())
    ).subscribe(
      pr => {
        console.log(pr);
        console.log(pr.status);
        console.log(pr.msg);
        this.apiData = pr;
      }
    );
  }


  public toggleVisibility(): void {
    this.showElement = !this.showElement;
  }

  public increment1(): void {
    let i = 1;
    this.someArr.forEach((item, ind) => {
      // console.log(item + ' -->' + ind);
      this.someArr[ind] = item + i;
      i++;
    });
  }

  public decrement1(): void {
    let i = 1;
    this.someArr.forEach((item, ind) => {
      this.someArr[ind] = item - i;
      i++;
    });
  }

  public increment2(): void {
    this.someArr2.forEach((item, ind) => {
      // console.log(item + ' -->' + ind);
      this.someArr2[ind] = ++item;
    });
  }

  public decrement2(): void {
    this.someArr2.forEach((item, ind) => {
      this.someArr2[ind] = --item;
    });
  }
  public increment3(): void {
    this.someArr3.forEach((item, ind) => {
      // console.log(item + ' -->' + ind);
      this.someArr3[ind] = ++item;
    });
  }

  public decrement3(): void {
    this.someArr3.forEach((item, ind) => {
      this.someArr3[ind] = --item;
    });
  }

}
