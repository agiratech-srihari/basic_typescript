var player = /** @class */ (function () {
    function player() {
    }
    player.prototype.greet = function () {
        console.log("hello,my name is ".concat(this.name));
    };
    return player;
}());
var mario = new player;
mario.name = "Mario";
mario.health = 10;
mario.isInvincible = true;
var peach = new player;
peach.name = "Peach";
peach.health = 8;
peach.isInvincible = false;
mario.greet();
peach.greet();
mario.tag = peach;
console.log(mario.tag.health);
