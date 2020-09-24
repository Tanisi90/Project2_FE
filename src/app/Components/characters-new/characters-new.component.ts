import { Component, OnInit } from '@angular/core';
import {RaceService} from 'src/app/Services/race.service';

@Component({
  selector: 'app-characters-new',
  templateUrl: './characters-new.component.html',
  styleUrls: ['./characters-new.component.css']
})

export class CharactersNewComponent implements OnInit {

  strMod:number = -3;
  wisMod:number = -3;
  chaMod:number = -3;
  conMod:number = -3;
  intMod:number = -3;
  dexMod:number = -3;

    hidden:boolean;

  constructor(private rs:RaceService) {
    this.hidden = true;
   }

  ngOnInit(): void {
    this.raceSpecs();
    this.classSpecs();
  }

  classSpecs(): void{

  }

  raceSpecs(): void{
    //Edit Languages
    var race:HTMLInputElement = <HTMLInputElement>document.getElementById("charRace");
      var lang:any[] = [];
      var index:string = race.value;
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
      this.rs.getBase(index).subscribe(
        (response:any) => {
          this.rs.parseLangs(lang,response);
          
          if(subrace == true){
            this.rs.getSub(subInd).subscribe(
              (response:any) => {
                this.rs.parseLangs(lang,response);
                this.changeLangs(lang);
              }
            );
          }else{
            this.changeLangs(lang);
          }
        }
      );
  }

  changeLangs(lang:any[]){
    var langs:HTMLElement = document.getElementById("charLangsChange");
    langs.innerHTML = "";
    let choice:boolean = false;
    let ids:string[] = [];
    for(let l of lang){
      if(choice == false){
        if(typeof(l) == "string"){
          langs.innerHTML += l + "<br>";
        }
        else if(typeof(l) == "number"){
          for(var i = 0; i < l; i++){
            ids.push("chooseLang" + (i+1));
            langs.innerHTML += "<label for='" + ids[i] + "'>Choose a Language" +
              "</label><select name='" + ids[i] + "' id='" + ids[i] +
              "'></select>"
          }
          choice = true;
        }
      }
      else {
        let child = document.createElement("option");
          child.value = l;
          child.innerText = l;
        for(var id of ids){
          document.getElementById(id).appendChild(child);
        }
      }
    }
    langs.innerHTML += "<br>"
  }

  submit(): void{

  }

  getModifier(id:string): void{
    console.log(this.strMod);
    var score:number = +(<HTMLInputElement>document.getElementById(id)).value;
    console.log(score);
    var mod:number = Math.floor((score-10)/2);
    console.log(mod);
    switch(id){
      case "charStr":
        this.strMod = mod;
        break;
      case "charWis":
        this.wisMod = mod;
        break;
      case "charInt":
        this.intMod = mod;
        break;
      case "charChar":
        this.chaMod = mod;
        break;
      case "charDex":
        this.dexMod = mod;
        break;
      case "charConst":
        this.conMod = mod;
        break;
    }
  }
}
