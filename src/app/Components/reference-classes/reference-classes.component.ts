import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../Services/class.service'
import { Class } from '../../models/class'
import { Feature } from 'src/app/models/feature';

@Component({
  selector: 'app-reference-classes',
  templateUrl: './reference-classes.component.html',
  styleUrls: ['./reference-classes.component.css']
})
export class ReferenceClassesComponent implements OnInit {
  public clss: Class;
  public profList: string = "";
  public saveList: string = "";
  public featureList: string = "";
  public num: number = 0;

  constructor(private cs: ClassService) {
    this.cs.getClass().subscribe(
      (response: any) => {
        this.clss = this.cs.parseClass(response);
        for(let i = 0; i < this.clss.proficiencies.length; i++) {
          if(i == 0) {
            this.profList += this.clss.proficiencies[i];
          } else {
            this.profList += "; " + this.clss.proficiencies[i];
          }
        }
        for(let i = 0; i < this.clss.savingProf.length; i++) {
          if(i == 0) {
            this.saveList += this.clss.savingProf[i];
          } else {
            this.saveList += ", " + this.clss.savingProf[i];
          }
        }
      }
    );
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

  test() {
    
  }

  ngOnInit(): void {
  }
}
