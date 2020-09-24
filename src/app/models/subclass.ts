import { Level } from './level';
import { SubclassLevel } from './subclass-level';

export class Subclass {
    public name: string;
    public flavor: string;
    public desc: string;
    public levels: SubclassLevel[];
    
    constructor(name: string, flavor: string, desc: string, levels: SubclassLevel[]) {
        this.name = name;
        this.flavor = flavor;
        this.desc = desc;
        this.levels = levels;
    }
}
