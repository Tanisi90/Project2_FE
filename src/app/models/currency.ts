export class Currency {

    public curr_id:number;
    public copper:number;
    public silver:number;
    public gold:number;
    public platinum:number;

    public Currency(copper:number, silver:number, gold:number, platinum:number) {
		this.copper = copper;
		this.silver = silver;
		this.gold = gold;
        this.platinum = platinum;
    }
}
