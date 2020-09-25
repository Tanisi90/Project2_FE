import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spell } from '../models/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private url: string = "https://www.dnd5eapi.co";
  private index: string;

  constructor(private http: HttpClient) { }

  setIndex(index: string) {
    this.index = index;
  }

  getSpell(): Observable<any> {
    return this.http.get(this.url + "/api/spells/" + this.index + "/");
  }

  //parseSpell(r: any): Spell {

  //}
}
