import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

  getClass(index: string): Observable<any> {
    let data = this.http.get("https://www.dnd5eapi.co/api/classes/" + index + "/").subscribe(
      (response: any) => {
        console.log("Printing a JSON!");
        console.log(JSON.stringify(response));
      }
    );
    console.log(data);
    return null;
  }

  parseClass(obs: Observable<any>): Class {
    console.log(obs);
    console.log("Parsing the class...");
    let data = obs.subscribe(
      (response: any) => {
        console.log("Printing a JSON!");
        console.log(JSON.stringify(response));
      }
    );
    console.log("Finished!");
    console.log(data);
    data.unsubscribe();
    return null;
  };
}