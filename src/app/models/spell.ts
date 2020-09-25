export class Spell {
    public name: string;
    public desc: string[];
    public higherLevel: string[];
    public range: number;
    public components: string[];
    public material: string;
    public ritual: boolean;
    public duration: string;
    public concentration: boolean;
    public castingTime: string;
    public level: number;
    public school: string;

    constructor(name: string, desc: string[], higherLevel: string[], range: number, components: string[], material: string, ritual: boolean, duration: string, concentration: boolean, castingTime: string, level: number, school: string) {
        this.name = name;
        this.desc = desc;
        this.higherLevel = higherLevel;
        this.range = range;
        this.components = components;
        this.material = material;
        this.ritual = ritual;
        this.duration = duration;
        this.concentration = concentration;
        this.castingTime = castingTime;
        this.level = level;
        this.school = school;
    }
}