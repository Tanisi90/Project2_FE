import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private url: string = "https://www.dnd5eapi.co/api/";
  private index: string;
  private interim:string;

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
    return this.http.get(this.url + "races/"+  index + "/");
  }
    getSub(index:string):Observable<any>{
      return this.http.get(this.url + "subraces/"+  index + "/");
    }

  parseLangs(lang:any[],r:any){
    var check:any[] = lang;
    for(var setLang of r["languages"]){
      if(!lang.includes(setLang["index"])){
        lang.push(setLang["index"]);
      }
    }

    if(r["language_options"] != null){
      lang.push(r["language_options"]["choose"]);
      for(var chLang of r["language_options"]["from"]){
        if(!lang.includes(chLang["index"])){
          lang.push(chLang["index"]);
        }
      }
    }
  }
}
