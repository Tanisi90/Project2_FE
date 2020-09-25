import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {RaceService} from 'src/app/Services/race.service';
import {ClassService} from 'src/app/Services/class.service';
import {Class} from 'src/app/models/class';
import { Router } from '@angular/router';
import {timer} from 'rxjs';
import {Character} from 'src/app/models/character';
import {CharacterService} from 'src/app/Services/character.service';
import {Race} from 'src/app/models/race';
import {Attribute} from 'src/app/models/attribute';
import {Feature} from 'src/app/models/feature';
import {Campaign} from 'scr/app/models/campaign';


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
  clss:Class;
  rce:Race;

  hidden:boolean;

  constructor(private rs:RaceService, private cs:ClassService, private router:Router, private charServ : CharacterService) {
    this.hidden = true;
   }

  ngOnInit(): void {
    this.classSpecs();
    this.raceSpecs();
  }

  classSpecs(): void{
    var cClass:HTMLInputElement = <HTMLInputElement>document.getElementById("charClass");
    this.cs.setIndex(cClass.value);
    this.cs.getClass().subscribe(
      (response:any)=>{
        this.clss = this.cs.parseClass(response);
        this.classProfs(response);
        if(response["spells"]!=null){
          document.getElementById("spells").hidden = false;
        }
        else{
          document.getElementById("spells").hidden = true;
        }
      });
    timer(2000).subscribe(done => {
      this.checkSpells()
      this.classEquip()});
  }

  checkSpells(){
    console.log("called");
    for(var i of this.clss.spells){
       this.isLevel(i["name"],i["url"]);
    }
  }

  isLevel(name:string, url:string){
    this.cs.getSpell(url).subscribe(
      (response:any)=>{
        if(response["level"] <= (<HTMLInputElement>document.getElementById("charLevel")).value){
          console.log(response["level"] + " is lower than " + (<HTMLInputElement>document.getElementById("charLevel")).value);
          document.getElementById(name).hidden = false;
        }
        else{
          document.getElementById(name).hidden = true;
        }
      }
    );
  }

  classEquip(){
    var equip:HTMLElement = document.getElementById("charEquipsChange");
    equip.innerText = this.clss.equipment.join(" ");
  }

  classProfs(response:any){
      var prfs:HTMLElement = document.getElementById("charProfsClass");
      prfs.innerText="";
      var profAr:any[] = response["proficiencies"];
      for(var p of profAr){
        prfs.innerHTML += "<div class = 'setProfs'>" + p["name"] + "</div>";
      }
      var opt:any[] = response["proficiency_options"];
      if(opt != null){
        if(opt["choose"] != null){
          for(var i = 0; i < opt["choose"]; i++){
            var child = document.createElement("select");
            child.setAttribute("id","getProf"+(i+1));
            child.setAttribute("class","getProf");
            prfs.appendChild(child);
            for(var pchoic of opt["from"]){
              var option = document.createElement("option");
              option.value = pchoic["index"];
              option.innerText = pchoic["name"];
              child.appendChild(option);
            }
          }
        }
        else{
          for(var inOpt of opt){
            for(var i = 0; i < inOpt["choose"]; i++){
              var child = document.createElement("select");
              child.setAttribute("id","getProf"+(i+1));
              child.setAttribute("class","getProf");
              prfs.appendChild(child);
              for(var pchoic of opt["from"]){
                var option = document.createElement("option");
                option.value = pchoic["index"];
                option.innerText = pchoic["name"];
                child.appendChild(option);
              }
            }
          }
        }
      }
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
      this.rs.setIndex(index)
      this.rs.getRace().subscribe(
        (response:any) => {
          this.rce = this.rs.parseRace(response);
        }
      )
      this.rs.getBase(index).subscribe(
        (response:any) => {
          this.getSpeed(response);
          this.getProfsR(response);
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

  getProfsR(response:any){
    var prfs:HTMLElement = document.getElementById("charProfsRace");
    prfs.innerText="";
    var profAr:any[] = response["starting_proficiencies"];
    for(var p of profAr){
      prfs.innerHTML += "<div class = 'setProfs'>" + p["name"] + "</div>";
    }
    var opt:any[] = response["starting_proficiency_options"];
    if(opt != null){
      if(opt["choose"] != null){
        for(var i = 0; i < opt["choose"]; i++){
          var child = document.createElement("select");
          child.setAttribute("id","getProf"+(i+1));
          child.setAttribute("class","getProf")
          prfs.appendChild(child);
          for(var pchoic of opt["from"]){
            var option = document.createElement("option");
            option.value = pchoic["index"];
            option.innerText = pchoic["name"];
            child.appendChild(option);
          }
        }
      }
      else{
        for(var inOpt of opt){
          for(var i = 0; i < inOpt["choose"]; i++){
            var child = document.createElement("select");
            child.setAttribute("id","getProf"+(i+1));
            child.setAttribute("class","getProf");
            prfs.appendChild(child);
            for(var pchoic of opt["from"]){
              var option = document.createElement("option");
              option.value = pchoic["index"];
              option.innerText = pchoic["name"];
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
              "' class = 'chooseLang'></select>"
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
    let str:Attribute;
    let wis:Attribute;
    let int:Attribute;
    let chr:Attribute;
    let dex:Attribute;
    let con:Attribute;
    str.attrib_name = "Strength";
    str.value = (<HTMLInputElement>document.getElementById("charStr")).value as unknown as number;
    str.modifier = this.strMod;
    str.save = 0;
    wis.attrib_name = "Wisdom"
    wis.value = (<HTMLInputElement>document.getElementById("charWis")).value as unknown as number;
    wis.modifier = this.wisMod;
    wis.save = 0;
    int.attrib_name = "Intelligence";
    int.value = (<HTMLInputElement>document.getElementById("charInt")).value as unknown as number;
    int.save = 0;
    chr.attrib_name = "Charisma";
    chr.value = (<HTMLInputElement>document.getElementById("charChar")).value as unknown as number;
    chr.modifier = this.chaMod;
    chr.save = 0;
    dex.attrib_name = "Dexterity";
    dex.value = (<HTMLInputElement>document.getElementById("charDex")).value as unknown as number;
    dex.modifier = this.dexMod;
    dex.save = 0;
    con.attrib_name = "Constitution";
    con.value = (<HTMLInputElement>document.getElementById("charCon")).value as unknown as number;
    con.modifier = this.conMod;
    con.save = 0;
    let atts:Attribute[] = [str,wis,int,chr,dex,con];
    this.cs.setIndex((<HTMLInputElement>document.getElementById("charClass")).value)
    
    let char:Character;
      char.char_name = (<HTMLInputElement>document.getElementById("charName")).value;
      char.alignment = (<HTMLInputElement>document.getElementById("charAlignment")).value;
      char.char_background = (<HTMLInputElement>document.getElementById("charBackground")).value;
      char.armorClass = 0;//ARMOR CLASS
      char.initiative = 0;//Initiative
      char.speed = <number><unknown>document.getElementById("charSpeed").innerText;
      char.exp = <number><unknown>(<HTMLInputElement>document.getElementById("charExp")).value;
      char.profBonus = 0;//ProfBonus
      char.currentFirst = 0;
      char.currentSecond = 0;
      char.currentThird = 0;
      char.currentFourth = 0;
      char.currentFifth = 0;
      char.currentSixth = 0;
      char.currentSeventh = 0;
      char.currentEighth = 0;
      char.currentNinth = 0;//SpellSlots
      char.inspiration = false;//Insp
      char.visibility = this.hidden;
      char.attributes = atts;
      char.skills = this.getSkills();
      char.spells = this.getSpells();
      char.equipment = this.getEquip();
      char.languages = this.getLangs();
      char.proficiencies = this.getProfs();
      char.class1 = this.clss;
      char.player = this.getUser(); 
      char.campaign = null;
      char.race = this.rce;
      char.currency = [
        <number><unknown>(<HTMLInputElement>document.getElementById("charPl")).value,
        <number><unknown>(<HTMLInputElement>document.getElementById("charGl")).value,
        <number><unknown>(<HTMLInputElement>document.getElementById("charSl")).value,
        <number><unknown>(<HTMLInputElement>document.getElementById("charCp")).value,
      ];
      char.hitpoints = 20,
      char.char_feature = this.getFeature()

    this.charServ.saveChar(char).subscribe(
        (response:any)=>{
          console.log("Char Saved");
        }
      );
  }

  getSkills():string[]{
      return ["Skill 1", "Skill 2", "Skill 3"];
      //placeholder due to time.
  }

  getEquip():string[]{
    return this.clss.equipment;
  }

  getSpells():string[]{
    let arr:any = document.getElementsByClassName("yourSpells");
    let spells:string[] = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i].hidden == false){
        spells.push(arr[i].innerText);
      }
    }
    return spells;
  }

  getLangs():string[]{
    let arr:any = document.getElementsByClassName("setLangs");
    let langs:string[] = [];
    for(var i = 0; i < arr.length; i++){
      langs.push(arr[i].innerText);
    }
    arr = document.getElementsByClassName("chooseLang");
    for(var i = 0; i < arr.length; i++){
      langs.push(arr[i].value);
    }
    return langs;
  }

  getProfs():string[]{
    let arr:any = document.getElementsByClassName("setProfs");
    let langs:string[] = [];
    for(var i = 0; i < arr.length; i++){
      langs.push(arr[i].innerText);
    }
    arr = document.getElementsByClassName("getProf");
    for(var i = 0; i < arr.length; i++){
      langs.push(arr[i].value);
    }
    return langs;
  }

  getUser():User{
    
  }

  getFeature():Feature[]{
    //Dummy features bc time
    var f:Feature;
    f.name = "dummy1";
    f.desc = ["Temp Data","To be replaced"];
    var f2:Feature;
    f2.name = "dummy2";
    f.desc = ["Temporary", "Leaving soon"]
    return [f, f2]
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