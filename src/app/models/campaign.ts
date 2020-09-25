import{User} from './user';
export class Campaign {
    public camp_id:number;
	public camp_name:string;
	public camp_description:string;
	public dm:User;
	public players:User[];
    public visibility:boolean;
    
    public Campaign(camp_id:number, camp_name:string, camp_description:string, dm:User, players:User[],
        visibility:boolean) {
    this.camp_id = camp_id;
    this.camp_name = camp_name;
    this.camp_description = camp_description;
    this.dm = dm;
    this.players = players;
    this.visibility = visibility;
    }
}
