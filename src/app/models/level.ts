import { Feature } from './feature';

export class  Level {
    public level: number;
    public abilityBonus: number;
    public profBonus: number;
    public features: Feature[];

    constructor(level: number, abilityBonus: number, profBonus: number, features: Feature[]) {
        this.level = level;
        this.abilityBonus = abilityBonus;
        this.profBonus = profBonus;
        this.features = features;
    }
}