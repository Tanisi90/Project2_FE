import { Feature } from './feature';
import { Subrace } from './subrace';

export class Race {
    public name: string;
    public speed: number;
    public abilityBonus: {[key: number]: string}[];
    public alignment: string;
    public age: string;
    public size: string;
    public proficiencies: string[];
    public languages: string;
    public features: Feature[];
    public subraces: Subrace[];

    constructor(name: string, speed: number, abilityBonus: {[key: number]: string}[], alignment: string, age: string, size:string, proficiencies: string[], languages: string, features: Feature[], subraces: Subrace[]) {
        this.name = name;
        this.speed = speed;
        this.abilityBonus = abilityBonus;
        this.alignment = alignment;
        this.age = age;
        this.size = size;
        this.proficiencies = proficiencies;
        this.languages = languages;
        this.features = features;
        this.subraces = subraces;
    }
}
