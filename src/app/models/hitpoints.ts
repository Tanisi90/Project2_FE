export class Hitpoints {
    hitp_id:number;
    currentHP: number;
    maxHP: number;
    tempHP: number;
    currentHD: number;
    maxHD: number;
    deathSuccesses: number;
    deathFailures: number;

    public HitPoints(currentHP:number, maxHP:number, tempHP:number, currentHD:number, maxHD:number, deathSuccesses:number,
        deathFailures:number) {
    this.currentHP = currentHP;
    this.maxHP = maxHP;
    this.tempHP = tempHP;
    this.currentHD = currentHD;
    this.maxHD = maxHD;
    this.deathSuccesses = deathSuccesses;
    this.deathFailures = deathFailures;
}
}
