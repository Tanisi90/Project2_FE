import { Component, OnInit } from '@angular/core';
import { SpellService } from 'src/app/Services/spell.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private ss: SpellService) { }

  ngOnInit(): void {
  }

  test() {
    this.ss.setIndex("acid-arrow");
    this.ss.parseSpell(this.ss.getSpell());
  }
}
