var anime = /** @class */ (function () {
    function anime() {
    }
    anime.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log("you can't set value below 0");
            return;
        }
        this.health = health;
    };
    anime.prototype.getHealth = function () {
        return this.health;
    };
    anime.prototype.setSpeed = function (speed) {
        if (speed < 0) {
            console.log("you can't set value below 0");
            return;
        }
        this.speed = speed;
    };
    anime.prototype.getspeed = function (speed) {
        return this.speed;
    };
    return anime;
}());
var naruto = new anime;
naruto.setHealth(100);
console.log("Naroto has health ".concat(naruto.getHealth(), "/100"));
