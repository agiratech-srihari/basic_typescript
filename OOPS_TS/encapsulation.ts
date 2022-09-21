class anime {
    private health:number;
    private speed:number;


    setHealth(health:number){
        if(health<0){
            console.log("you can't set value below 0");
            return;
        }
        this.health = health;
    }
    getHealth(){
        return this.health;
    }
    setSpeed(speed:number){
        if(speed<0){
            console.log("you can't set value below 0");
            return;
        }
        this.speed = speed;
    }
    getspeed(speed:number){
        return this.speed;
    }

}
const naruto = new anime;
naruto.setHealth(100);
console.log(`Naroto has health ${naruto.getHealth()}/100`)
