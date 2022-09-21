export class player {
    name:string;
    health:number;
    isInvincible:boolean;
    tag : player;

    greet(){
        console.log(`hello,my name is ${this.name}`);
    }

}
const mario = new player;
mario.name = "Mario";
mario.health=10;
mario.isInvincible = true;

const peach = new player;
peach.name = "Peach";
peach.health=8;
peach.isInvincible=false;

mario.greet();
peach.greet();
mario.tag = peach;
// console.log(mario.tag.health);
