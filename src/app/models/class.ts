import { Level } from './level';
import { Link } from './link';
import { Subclass } from './subclass';

export class Class {
    public name: string;
    public hitDie: number;
    public choose: number[];
    public skillProf: string[];
    public proficiencies: string[];
    public savingProf: string[];
    public equipment: string[];
    public subclasses: Subclass[];
    public levels: Level[];
    public spells: Link[];

    constructor(name: string, hitDie: number, choose: number[], skillProf: string[], proficiencies: string[], savingProf: string[], equipment: string[], subclasses: Subclass[], levels: Level[], spells: Link[]) {
        this.name = name;
        this.hitDie = hitDie;
        this.choose = choose;
        this.skillProf = skillProf;
        this.proficiencies = proficiencies;
        this.savingProf = savingProf;
        this.equipment = equipment;
        this.subclasses = subclasses;
        this.levels = levels;
        this.spells = spells;
    }
}