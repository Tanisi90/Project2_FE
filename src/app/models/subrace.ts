import { Feature } from './feature';

export class Subrace {
    public name: string;
    public desc: string;
    public bonus: number[];
    public ability: string[];
    public proficiencies: string[];
    public language: string;
    public traits: Feature[];

    constructor(name: string, desc: string, bonus: number[], ability: string[], proficiencies: string[], language: string, traits: Feature[]) {
        this.name = name;
        this.desc = desc;
        this.bonus = bonus;
        this.ability = ability;
        this.proficiencies = proficiencies;
        this.language = language;
        this.traits = traits;
    }
}
