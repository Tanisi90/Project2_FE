import {Class} from './class';
import {Feature} from './feature';
import {User} from './user';
import {Attribute} from './attribute';
import {Campaign} from './campaign';
import {Currency} from './currency';
import { Hitpoints } from './hitpoints';

export class Character {
    public char_id:number;
    public char_name:string;
	public alignment:string;
	public char_background:string;
	public armorClass:number;
	public initiative:number;
	public speed:number;
	public exp:number;
	public profBonus:number;
	public currentFirst:number;
	public currentSecond:number;
	public currentThird:number;
	public currentFourth:number;
	public currentFifth:number;
	public currentSixth:number;
	public currentSeventh:number;
	public currentEighth:number;
	public currentNinth:number;
	public inspiration:boolean;
	public visibility:boolean;
	public attributes:Attribute[];
	public skills:string;
	public spells:string;
	public equipment:string;
	public languages:string[];
	public proficiencies:string[];
	public class1:Class;
	public player:User;
	public campaign:Campaign;
	public race:string;
	public currency:Currency;
	public hitpoints:Hitpoints;
    public char_feature:Feature[];
    
    public Character(
        char_id:number,
        char_name:string,
        alignment:string,
        char_background:string,
        armorClass:number,initiative:number, speed:number,
        exp:number, profBonus:number, currentFirst:number,
        currentSecond:number, currentThird:number, currentFourth:number,
        currentFifth:number, currentSixth:number, currentSeventh:number,
        currentEighth:number, currentNinth:number, inspiration:boolean,
        visibility:boolean, attributes:Attribute[],
        skills:string, spells:string,
        equipment:string,
        languages:string[],
        proficiencies:string[],
        class1:Class,
        player:User,
        campaign:Campaign,
        race:string,
        currency:Currency,
        hitpoints:Hitpoints,
        char_feature:Feature[]) {
    
        this.char_id = char_id;
        this.char_name = char_name;
        this.alignment = alignment;
        this.char_background = char_background;
        this.armorClass = armorClass;
        this.initiative = initiative;
        this.speed = speed;
        this.exp = exp;
        this.profBonus = profBonus;
        this.currentFirst = currentFirst;
        this.currentSecond = currentSecond;
        this.currentThird = currentThird;
        this.currentFourth = currentFourth;
        this.currentFifth = currentFifth;
        this.currentSixth = currentSixth;
        this.currentSeventh = currentSeventh;
        this.currentEighth = currentEighth;
        this.currentNinth = currentNinth;
        this.inspiration = inspiration;
        this.visibility = visibility;
        this.attributes = attributes;
        this.skills = skills;
        this.spells = spells;
        this.equipment = equipment;
        this.languages = languages;
        this.proficiencies = proficiencies;
        this.class1 = class1;
        this.player = player;
        this.campaign = campaign;
        this.race = race;
        this.currency = currency;
        this.hitpoints = hitpoints;
        this.char_feature = char_feature;
    }
}
