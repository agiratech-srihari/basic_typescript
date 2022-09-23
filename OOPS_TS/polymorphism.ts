class Hero {
    hunger : number;
    health : number;

    attack(){
        console.log("I'm attacking")
    }
    move(){
        console.log(" I'm moving")
    }
}
class Archer extends Hero{}
class Knight extends Hero{}

const archer: Hero = new Archer;
const knight: Hero = new Knight;



class Tribe {
    private heros!: Hero[];
    
    setHeros(heros:Hero[]){
        this.heros = heros;
    }
    attack():void {
        for (let hero of this.heros){
            hero.attack();
        }
    }
    
}    
    const heros:Hero[] = [archer,knight]
    const tribe = new Tribe;
    tribe.setHeros(heros)
    tribe.attack()
