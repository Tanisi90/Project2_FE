import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race';
import { RaceService } from 'src/app/Services/race.service';

@Component({
  selector: 'app-reference-races',
  templateUrl: './reference-races.component.html',
  styleUrls: ['./reference-races.component.css']
})
export class ReferenceRacesComponent implements OnInit {
  public race: Race;

  constructor(private rs: RaceService) {
    this.rs.getRace("Dragonborn").subscribe(
      (response: any) => {
        console.log("I got it!");
        this.race = this.rs.parseRace(response);
      });
  }

  ngOnInit(): void {
  }

}
