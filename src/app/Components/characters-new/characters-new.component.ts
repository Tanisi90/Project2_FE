import { Component, OnInit } from '@angular/core';

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

  type = "Hidden";

  constructor() { }

  ngOnInit(): void {
  }

  classSpecs(): void{

  }

  raceSpecs(): void{

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
