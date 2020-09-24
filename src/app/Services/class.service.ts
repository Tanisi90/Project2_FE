import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Class } from '../models/class';
import { Subclass } from '../models/subclass';
import { Level } from '../models/level';
import { Feature } from '../models/feature';
import { SubclassLevel } from '../models/subclass-level';
import { Link } from '../models/link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private url: string = "https://www.dnd5eapi.co";
  private index: string;

  constructor(private http: HttpClient) { }

  getClass(index: string): Observable<any> {
    this.index = index;
    return this.http.get(this.url + "/api/classes/" + index + "/");
  }

  parseClass(r: any): Class {
    let choose: number[] = [];
    let profSkills: string[] = [];
    for (let i in r["proficiency_choices"]) {
      choose.push(r["proficiency_choices"][i]["choose"])
      let selections: string[] = [];
      for (let j in r["proficiency_choices"][i]["from"]) {
        selections.push(r["proficiency_choices"][i]["from"][j]["name"]);
      }
      let list: string = "";
      selections.forEach((value, index) => {
        if(index == 0) {
          list += value.replace('Skill: ','');
        } else {
          list += ", " + value.replace('Skill: ','');
        }
      });
      profSkills.push(list);
    };
    let profs: string[] = [];
    for (let i in r["proficiencies"]) {
      profs.push(r["proficiencies"][i]["name"]);
    };
    let sThrows: string[] = [];
    for (let i in r["saving_throws"]) {
      sThrows.push(r["saving_throws"][i]["name"]);
    };
    let spells: Link[];
    if(r["spells"]) {
      spells = this.parseSpells();
    } else {
      spells = null;
    }
    let c = new Class(r["name"], r["hit_die"], choose, profSkills, profs, sThrows, this.parseEquipment(), this.parseSubclass(), this.parseLevels(), spells);
    console.log(c);
    return c;
  };

  parseEquipment(): string[] {
    let gear: string[] = [];
    let choose: number = 0;
    this.http.get(this.url + "/api/starting-equipment/" + this.index).subscribe((r: any) => { // r = starting-equipment/barbarian
      for(let i in r["starting_equipment"]) {
        let name: string = "";
        let num: number = 0;
        name = r["starting_equipment"][i]["equipment"]["name"];
        num = r["starting_equipment"][i]["quantity"];
        if(name == "Leather") {
          name += " Armor";
        }
        if(num == 1) {
          gear.push(name);
        } else if(num > 0) {
          gear.push(name + " x" + num);
        }
      }
      for(let i in r["starting_equipment_options"]) {
        let list: string = "";
        choose = r["starting_equipment_options"][i]["choose"];
        let choices: string[] = [];
        for(let j in r["starting_equipment_options"][i]["from"]) {
          let name: string = "";
          let num: number = 0;
          if(r["starting_equipment_options"][i]["from"][j]["equipment"] != null) { // If it's regular equipment
            name = r["starting_equipment_options"][i]["from"][j]["equipment"]["name"];
            num = r["starting_equipment_options"][i]["from"][j]["quantity"];
          } else if(r["starting_equipment_options"][i]["from"][j]["equipment_option"] != null) { // Else, if it's a weapon category  
            num = r["starting_equipment_options"][i]["from"][j]["equipment_option"]["choose"];
            if(r["starting_equipment_options"][i]["from"][j]["equipment_option"]["from"]["equipment_category"] != null) {
              name = r["starting_equipment_options"][i]["from"][j]["equipment_option"]["from"]["equipment_category"]["name"];
            } else {
              name = r["starting_equipment_options"][i]["from"][j]["equipment_option"]["from"]["name"];
            }
          } else if(r["starting_equipment_options"][i]["from"][j]["name"] != null) { // Else, if it's an equipment category
            num = r["starting_equipment_options"][i]["choose"];
            name = r["starting_equipment_options"][i]["from"][j]["name"];
          } else { // Else, it's a bundle!
            let bundle: string[] = [];
            let tied: string = "";
            bundle.push("(");
            for(let k in r["starting_equipment_options"][i]["from"][j]) {
              if(r["starting_equipment_options"][i]["from"][j][k]["equipment_option"] != null) {
                num = r["starting_equipment_options"][i]["from"][j][k]["equipment_option"]["choose"];
                name = r["starting_equipment_options"][i]["from"][j][k]["equipment_option"]["from"]["equipment_category"]["name"];
              } else {
                num = r["starting_equipment_options"][i]["from"][j][k]["quantity"];
                name = r["starting_equipment_options"][i]["from"][j][k]["equipment"]["name"];
              }
              if(name == "Leather") {
                name += " Armor";
              }
              if(num == undefined||num == 1) {
                bundle.push(name);
              } else {
                bundle.push(name + " x" + num);
              }
            }
            bundle.push(")");
            bundle.forEach((value, index) => {
              if(index < 2 || index == (bundle.length - 1)) {
                tied += value;
              } else {
                tied += "; " + value;
              }
            });
            choices.push(tied);
            continue;
          }
          if(name == "Leather") {
            name += " Armor";
          }
          if(r["starting_equipment_options"][i]["from"][j]["prerequisites"] != null) {
            if(num == 1) {
              choices.push(name + " (if proficient)");
            } else {
              choices.push(name + " x" + num + " (if proficient)")
            }
          } else if(num == undefined||num == 1) {
            choices.push(name);
          } else if(num > 0) {
            choices.push(name + " x" + num);
          }
        }
        choices.forEach((value, index) => {
          if(index == 0) {
            list += value;
          } else {
            list += "; " + value;
          }
        });
        gear.push("Choose " + choose + " item(s) from: " + list);
      }
    });
    return gear;
  }

  parseSubclass(): Subclass[] {
    let sClasses: Subclass[] = [];
    let levels: SubclassLevel[] = [];
    this.http.get(this.url + "/api/classes/" + this.index).subscribe(((r: any) => { // r = classes/barbarian
      for (let i in r["subclasses"]) {
        this.http.get(this.url + r["subclasses"][i]["url"]).subscribe((r2: any) => { // r2 = subclasses/berserker
          this.http.get(this.url + r2["subclass_levels"]).subscribe((r3: any) => { // r3 = subclasses/berserker/levels
            for (let j in r3) {
              let features: Feature[] = [];
              for (let k in r3[j]["features"]) {
                this.http.get(this.url + r3[j]["features"][k]["url"]).subscribe((r4: any) => {
                  features.push(r4["name"], r4["desc"]);
                });
              }
              levels.push(new SubclassLevel(r3[j]["level"], features));
            }
          });
          let sClass: Subclass = new Subclass(r2["name"], r2["subclass_flavor"], r2["desc"], levels);
          sClasses.push(sClass);
        });
      }
    })
    )
    return sClasses;
  }

  parseLevels(): Level[] { // GOOD TO GO!
    let levels: Level[] = [];
    this.http.get(this.url + "/api/classes/" + this.index + "/levels").subscribe(
      (r: any) => {
        for (let i in r) {
          if (r[i]["subclass"] != null) { // This is a subclass, we don't want it!
            continue;
          }
          let features: Feature[] = [];
          for (let j in r[i]["features"]) {
            this.http.get(this.url + r[i]["features"][j]["url"]).subscribe((r2: any) => {
              features.push(new Feature(r2["name"], r2["desc"]));
            });
          }
          levels.push(new Level(r[i]["level"], r[i]["ability_score_bonuses"], r[i]["prof_bonus"], features));
        }
      }
    );
    return levels;
  }

  parseSpells(): Link[] { // Unimplemented
    let list: Link[] = [];
    this.http.get(this.url + "/api/classes/" + this.index + "/spells").subscribe((r: any) => {
      for(let i in r["results"]) {
        list.push(new Link(r["results"][i]["name"], r["results"][i]["url"]));
      }
    });
    return list;
  }
}