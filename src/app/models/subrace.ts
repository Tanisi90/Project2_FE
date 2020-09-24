import { Feature } from './feature';

export class Subrace {
    public name: string;
    public desc: string;
    public abilityBonus: {[key: number]: string}[];
    public proficiencies: string[];
    public language: string;
    public traits: Feature[];

    constructor(name: string, desc: string, abilityBonus: {[key: number]: string}[], proficiencies: string[], language: string, traits: Feature[]) {
        this.name = name;
        this.desc = desc;
        this.abilityBonus = abilityBonus;
        this.proficiencies = proficiencies;
        this.language = language;
        this.traits = traits;
    }
}
