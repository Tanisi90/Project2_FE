import { Feature } from './feature';

export class SubclassLevel {
    public level: number;
    public features: Feature[];

    constructor(level: number, features: Feature[]) {
        this.level = level;
        this.features = features;
    }
}
