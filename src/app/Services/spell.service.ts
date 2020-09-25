import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spell } from '../models/spell';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private url: string = "https://www.dnd5eapi.co";
  private index: string;

  constructor(private http: HttpClient, private us: UrlService) { }

  setIndex(index: string) {
    this.index = index;
  }

  getAll(): Observable<any> {
    return this.http.get(this.url + "/api/spells/");
  }

  getSpell(): Observable<any> {
    return this.http.get(this.url + "/api/spells/" + this.us.parseUrl(this.index) + "/");
  }

  parseSpell(r: any): Spell {
    return new Spell(r["name"], r["desc"], r["higher_level"], r["range"], r["components"], r["material"], r["ritual"], r["duration"], r["concentration"], r["casting_time"], r["level"], r["school"]["name"]);
  }
}
