import { Feature } from './feature';

export class Race {
    public name: string;
    public subrace: string;
    public size: string;
    public features: Feature[];
    public description: string;

    constructor(name: string, subrace: string, size: string, features: Feature[], description: string) {
        this.name = name;
        this.subrace = subrace;
        this.size = size;
        this.features = features;
        this.description = description;
    }
}
