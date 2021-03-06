import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Race } from '../models/race';
import { Feature } from '../models/feature';
import { Subrace } from '../models/subrace';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  private url: string = "https://www.dnd5eapi.co";
  private index: string;

  constructor(private http:HttpClient) { }

  getLangs(index:string):any[]{
    var lang:any[] = [];
    this.index = index;
    var subrace:boolean = false;
    var subInd:string = "";
    switch(index){
      case "high-elf":
        subInd = index;
        index = "elf";
        subrace = true;
        break;
      case "lightfoot-halfling":
        subInd = index;
        index = "halfling";
        subrace = true;
        break;
      case "rock-gnome":
        subInd = index;
        index = "gnome";
        subrace = true;
        break;
      case "hill-dwarf":
        subInd = index;
        index = "dwarf";
        subrace = true;
        break; 
      default:
        break;
    }
    this.getBase(index).subscribe(
      (response:any) => {
        this.parseLangs(lang,response);
      }
    );
    if(subrace == true){
      this.getSub(subInd).subscribe(
        (response:any) => {
          this.parseLangs(lang,response);
        }
      );
    }
    return lang;
  }

   getBase(index:string):Observable<any>{
    return this.http.get(this.url + "/api/races/"+  index + "/");
  }

  getSub(index:string):Observable<any>{
      return this.http.get(this.url + "/api/subraces/"+  index + "/");
  }

  parseLangs(lang:any[],r:any){
    var check:any[] = lang;
    for(var setLang of r["languages"]){
      if(!lang.includes(setLang["name"])){
        lang.push(setLang["name"]);
      }
    }
    if(r["language_options"] != null){
      lang.push(r["language_options"]["choose"]);
      for(var chLang of r["language_options"]["from"]){
        if(!lang.includes(chLang["name"])){
          lang.push(chLang["name"]);
        }
      }
    }
  }

  setIndex(index: string) {
    this.index = index;
  }

  getRace(): Observable<any> {
    return this.http.get(this.url + "/api/races/" + this.index + "/");
  }

  parseRace(r: any): Race {
    let bonus: number[] = [];
    let ability: string[] = [];
    for(let i in r["ability_bonuses"]) {
      bonus[i] = r["ability_bonuses"][i]["bonus"];
      ability[i] = r["ability_bonuses"][i]["name"];
    }
    let size: string = r["size"] + ": " + r["size_description"];
    let profs: string[] = [];
    for(let i in r["starting_proficiencies"]) {
      let name: string = r["starting_proficiencies"][i]["name"];
      if(name.indexOf("Skill: ") != -1) {
        name = name.replace('Skill: ','');
      }
      profs.push(name)
    }
    let choose: number = 0;
    if(r["starting_proficiency_options"] != null) {
      choose = r["starting_proficiency_options"]["choose"];
      let selections: string[] = [];
      for (let i in r["starting_proficiency_options"]["from"]) {
        selections.push(r["starting_proficiency_options"]["from"][i]["name"]);
      }
      let list: string = "Choose " + choose + " from: ";
      selections.forEach((value, index) => {
        if(value.indexOf("Skill: ") != -1) {
          if(index == 0) {
            list += value.replace('Skill: ','');
          } else {
            list += ", " + value.replace('Skill: ','');
          }
        } else {
          if(index == 0) {
            list += value;
          } else {
            list += ", " + value;
          }
        }
      });
      profs.push(list);
    };
    let languages: string[] = [];
    for(let i in r["languages"]) {
      languages.push(r["languages"][i]["name"]);
    }
    let language: string = "";
    languages.forEach((value, index) => {
      if(index == 0) {
        language += value;
      } else {
        language += ", " + value;
      }
    });
    language += ": " + r["language_desc"];
    let features: Feature[] = [];
    for (let i in r["traits"]) {
      this.http.get(this.url + r["traits"][i]["url"]).subscribe((r2: any) => {
        features.push(new Feature(r2["name"], r2["desc"]));
      });
    }
    let subrace: Subrace[] = null;
    if(r["subraces"][0] != null) {
      subrace = this.parseSubrace(r["subraces"][0]["url"]);
    }
    let rc = new Race(r["name"], r["speed"], bonus, ability, r["alignment"], r["age"], size, profs, language, features, subrace);
    return rc;
  }

  parseSubrace(url2: string): Subrace[] {
    let sr: Subrace[] = [];
    this.http.get(this.url + url2).subscribe((r2: any) => {
      let bonus: number[] = [];
      let ability: string[] = [];
      for(let i in r2["ability_bonuses"]) {
        bonus[i] = r2["ability_bonuses"][i]["bonus"];
        ability[i] = r2["ability_bonuses"][i]["name"];
      }
      let profs: string[] = [];
      for(let i in r2["starting_proficiencies"]) {
        let name: string = r2["starting_proficiencies"][i]["name"];
        if(name.indexOf("Skill: ") != -1) {
          name = name.replace('Skill: ','');
        }
        profs.push(name);
      }
      let choose: number[] = [];
      if(r2["starting_proficiency_options"] != null) {
        for (let i in r2["starting_proficiency_options"]) {
          choose.push(r2["starting_proficiency_options"][i]["choose"])
          let selections: string[] = [];
          for (let j in r2["starting_proficiency_options"][i]["from"]) {
            selections.push(r2["starting_proficiency_options"][i]["from"][j]["name"]);
          }
          let list: string = "";
          selections.forEach((value, index) => {
            if(value.indexOf("Skill: ") != -1) {
              if(index == 0) {
                list += value.replace('Skill: ','');
              } else {
                list += ", " + value.replace('Skill: ','');
              }
            } else {
              if(index == 0) {
                list += value;
              } else {
                list += ", " + value;
              }
            }
          });
          profs.push(list);
        };
      }
      let languages: string[] = [];
      for(let i in r2["languages"]) {
        languages.push(r2["languages"][i]["name"]);
      }
      let language: string = "";
      languages.forEach((value, index) => {
        if(index == 0) {
          language += value;
        } else {
          language += ", " + value;
        }
      });
      if(r2["language_desc"] != undefined) {
        language += ": " + r2["language_desc"];
      } else {
        language = null;
      }
      let features: Feature[] = [];
      for (let i in r2["racial_traits"]) {
        this.http.get(this.url + r2["racial_traits"][i]["url"]).subscribe((r3: any) => {
          features.push(new Feature(r3["name"], r3["desc"]));
        });
      }
      sr.push(new Subrace(r2["name"], r2["desc"], bonus, ability, profs, language, features));
    });
    return sr;
  }
}
