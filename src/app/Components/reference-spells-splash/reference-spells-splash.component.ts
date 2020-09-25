import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/Services/url.service';
import { Router } from '@angular/router';
import { SpellService } from 'src/app/Services/spell.service';

@Component({
  selector: 'app-reference-spells-splash',
  templateUrl: './reference-spells-splash.component.html',
  styleUrls: ['./reference-spells-splash.component.css']
})
export class ReferenceSpellsSplashComponent implements OnInit {
  public spells: string[] = [];

  constructor(private ss: SpellService, private us: UrlService, private router: Router) {
    this.ss.getAll().subscribe(
      (r: any) => {
        for(let spell in r["results"]) {
          this.spells.push(r["results"][spell]["name"]);
        }
    });
  }

  ngOnInit(): void {
  }

  navToSpell(name: string) {
    this.ss.setIndex(name);
    if(this.router.url != '/reference/spells') {
      this.router.navigateByUrl('/reference/spells');
    } else {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigateByUrl('/reference/spells');
    }); 
    }
  }
}