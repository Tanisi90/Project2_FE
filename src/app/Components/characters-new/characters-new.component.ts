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

  constructor(private rs:RaceService) { }

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
          this.getSpeed(response);
          this.getProfs(response);
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

  getSpeed(response:any){
    var speed:HTMLElement = document.getElementById("charSpeed");
    speed.innerText = response["speed"];
  }

  getProfs(response:any){
    var prfs:HTMLElement = document.getElementById("charProfsRace");
    prfs.innerText="";
    var profAr:any[] = response["starting_proficiencies"];
    for(var p of profAr){
      prfs.innerHTML += "<div class = 'setProfs'>" + p["index"] + "</div>";
    }
    var opt:any[] = response["starting_proficiency_options"];
    if(opt != null){
      if(opt["choose"] != null){
        for(var i = 0; i < opt["choose"]; i++){
          var child = document.createElement("select");
          child.setAttribute("id","getProf"+(i+1));
          prfs.appendChild(child);
          for(var pchoic of opt["from"]){
            var option = document.createElement("option");
            option.value = pchoic["index"];
            option.innerText = pchoic["index"];
            child.appendChild(option);
          }
        }
      }
      else{
        for(var inOpt of opt){
          for(var i = 0; i < inOpt["choose"]; i++){
            var child = document.createElement("select");
            child.setAttribute("id","getProf"+(i+1));
            prfs.appendChild(child);
            for(var pchoic of opt["from"]){
              var option = document.createElement("option");
              option.value = pchoic["index"];
              option.innerText = pchoic["index"];
              child.appendChild(option);
            }
          }
        }
      }
    }
  }

  changeLangs(lang:any[]){
    var langs:HTMLElement = document.getElementById("charLangsChange");
    langs.innerHTML = "";
    let choice:boolean = false;
    let ids:string[] = [];
    for(let l of lang){
      if(choice == false){
        if(typeof(l) == "string"){
          langs.innerHTML += "<div class = 'setLangs'>" +  l + "</div>";
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
