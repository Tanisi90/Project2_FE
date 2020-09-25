export class Attribute {
    public attrib_id:number;
    public attrib_name:string;
	public value:number;
	public modifier:number;
    public save:number;
    
    public Attribute(attrib_name:string, value:number, modifier:number, save:number) {
		this.attrib_name = attrib_name;
		this.value = value;
		this.modifier = modifier;
		this.save = save;
	}
}
