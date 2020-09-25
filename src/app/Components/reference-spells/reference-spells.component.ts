import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/models/spell';
import { SpellService } from 'src/app/Services/spell.service';

@Component({
  selector: 'app-reference-spells',
  templateUrl: './reference-spells.component.html',
  styleUrls: ['./reference-spells.component.css']
})
export class ReferenceSpellsComponent implements OnInit {
  public spell: Spell;

  constructor(private ss: SpellService) {
    this.ss.getSpell().subscribe(
      (r: any) => {
        this.spell = this.ss.parseSpell(r);
    });
  }

  hasArray(array: any[]): boolean {
    if(!Array.isArray(array) || !array.length) {
      return false;
    } else {
        if(typeof array !== 'undefined' && array.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  stringify(array: string[]): string {
    let list: string = "";
      array.forEach((value, index) => {
        let full: string = "";
        switch(value) {
          case "V":
            full = "Verbal";
            break;
          case "S":
            full = "Somatic";
            break;
          case "M":
            full = "Material (" + this.spell.material + ")";
            break;
        }
        if(index == 0) {
          list += full;
        } else {
          list += ", " + full;
        }
      });
    return list;
  }

  nth(x: number): string {
    let nth: string = "";
    switch(x) {
      case 0:
        nth = this.capitalize(this.spell.school) + " cantrip";
        break;
      case 1:
        nth = "1st-level " + this.spell.school;
        break;
      case 2:
        nth = "2nd-level " + this.spell.school;
        break;
      case 3:
        nth = "3rd-level " + this.spell.school;
        break;
      case 4:
        nth = "4th-level " + this.spell.school;
        break;
      case 5:
        nth = "5th-level " + this.spell.school;
        break;
      case 6:
        nth = "6th-level " + this.spell.school;
        break;
      case 7:
        nth = "7th-level " + this.spell.school;
        break;
      case 8:
        nth = "8th-level " + this.spell.school;
        break;
      case 9:
        nth = "9th-level " + this.spell.school;
        break;
    }
    if(this.spell.ritual) {
      nth += " (ritual)";
    }
    return nth;
  }

  capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  ngOnInit(): void {
  }
}
