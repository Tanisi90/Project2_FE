import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Character} from '../models/character';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url: string = "http://localhost:8080/data/";

  constructor(private http :HttpClient) { }

  saveChar(c:Character ):Observable<any>{
    return this.http.post(this.url + "/character/new",c);
  }
}
