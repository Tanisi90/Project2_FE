import { Feature } from './feature';
import { Subrace } from './subrace';

export class Race {
    public name: string;
    public speed: number;
    public bonus: number[];
    public ability: string[];
    public alignment: string;
    public age: string;
    public size: string;
    public proficiencies: string[];
    public languages: string;
    public features: Feature[];
    public subraces: Subrace[];

    constructor(name: string, speed: number, bonus: number[], ability: string[], alignment: string, age: string, size:string, proficiencies: string[], languages: string, features: Feature[], subraces: Subrace[]) {
        this.name = name;
        this.speed = speed;
        this.bonus = bonus;
        this.ability = ability;
        this.alignment = alignment;
        this.age = age;
        this.size = size;
        this.proficiencies = proficiencies;
        this.languages = languages;
        this.features = features;
        this.subraces = subraces;
    }
}
