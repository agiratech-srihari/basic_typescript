 class Animal { 
     hunger:number;
     health:number;
     protected coordX:number;
     protected coordY:number;
    
     setCoordX(x){
         this.coordX=x
     }
     setCoordY(y){
        this.coordY=y
    }
    eat(){
        console.log("I'm eating.");
    }
    sleep(){
        console.log("I'm sleeping.");
    }
    move(){
        console.log("I'm moving.");
    }
    makeNoise(){
        console.log("Make noise.");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log('Bark!')
    }
    returnowner(){
        console.log(`I'm currently at (${this.coordX},${this.coordY}) & i'm returing to my owner`)
    }
}
class Cat extends Animal {
    makeNoise(): void {
        console.log('Meow!')
    }
}

const dog = new Dog;
dog.setCoordX(5);
dog.setCoordY(5);
const cat = new Cat;
// dog.makeNoise();
// cat.makeNoise();
dog.returnowner();