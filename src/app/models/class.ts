import { Level } from './level';
import { Spell } from './spell';

export class Class {
    public name: string;
    public hitDie: number;
    public chooseProf: number;
    public skillProf: string[];
    public proficiencies: string[];
    public savingProf: string[];
    public equipment: string[];
    public subclasses: string[];
    public levels: Level[];
    public spells: Spell[];

    constructor(name: string, hitDie: number, chooseProf: number, skillProf: string[], proficiencies: string[], savingProf: string[], equipment: string[], subclasses: string[], levels: Level[], spells: Spell[]) {
        this.name = name;
        this.hitDie = hitDie;
        this.chooseProf = chooseProf;
        this.skillProf = skillProf;
        this.proficiencies = proficiencies;
        this.savingProf = savingProf;
        this.equipment = equipment;
        this.subclasses = subclasses;
        this.levels = levels;
        this.spells = spells;
    }
}