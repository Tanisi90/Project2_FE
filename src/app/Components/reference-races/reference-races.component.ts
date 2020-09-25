import { Component, OnInit } from '@angular/core';

import { Race } from 'src/app/models/race';
import { RaceService } from 'src/app/Services/race.service';
import { Feature } from 'src/app/models/feature';

@Component({
  selector: 'app-reference-races',
  templateUrl: './reference-races.component.html',
  styleUrls: ['./reference-races.component.css']
})
export class ReferenceRacesComponent implements OnInit {
  public race: Race;

  constructor(private rs: RaceService) {
    this.rs.getRace().subscribe(
      (response: any) => {
        this.race = this.rs.parseRace(response);
      });
  }

  parseFeatures(list: Feature[]): string {
    let str: string = "";
    for(let i = 0; i < list.length; i++) {
      if(i == 0) {
        str += list[i].name;
      } else {
        str += "; " + list[i].name;
      }
    }
    return str;
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

  ngOnInit(): void {
  }

}
