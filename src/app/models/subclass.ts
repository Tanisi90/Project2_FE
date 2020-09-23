import { Level } from './level';
import { SubclassLevel } from './subclass-level';

export class Subclass {
    private name: string;
    private flavor: string;
    private desc: string;
    private levels: SubclassLevel[];
    
    constructor(name: string, flavor: string, desc: string, levels: SubclassLevel[]) {
        this.name = name;
        this.flavor = flavor;
        this.desc = desc;
        this.levels = levels;
    }
}
