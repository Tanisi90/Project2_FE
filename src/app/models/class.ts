import { Level } from './level';
import { Link } from './link';
import { Subclass } from './subclass';

export class Class {
    public name: string;
    public hitDie: number;
    public chooseProf: number;
    public skillProf: string[];
    public proficiencies: string[];
    public savingProf: string[];
    public equipment: string[];
    public subclasses: Subclass[];
    public levels: Level[];
    public spells: Link[];

    constructor(name: string, hitDie: number, chooseProf: number, skillProf: string[], proficiencies: string[], savingProf: string[], equipment: string[], subclasses: Subclass[], levels: Level[], spells: Link[]) {
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