import { Feature } from './feature';

export class Race {
    private name: string;
    private subrace: string;
    private size: string;
    private features: Feature[];
    private description: string;

    constructor(name: string, subrace: string, size: string, features: Feature[], description: string) {
        this.name = name;
        this.subrace = subrace;
        this.size = size;
        this.features = features;
        this.description = description;
    }
}
