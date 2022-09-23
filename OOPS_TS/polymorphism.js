var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.attack = function () {
        console.log("I'm attacking");
    };
    Hero.prototype.move = function () {
        console.log(" I'm moving");
    };
    return Hero;
}());
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Archer;
}(Hero));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Knight;
}(Hero));
var archer = new Archer;
var knight = new Knight;
var Tribe = /** @class */ (function () {
    function Tribe() {
    }
    Tribe.prototype.setHeros = function (heros) {
        this.heros = heros;
    };
    Tribe.prototype.attack = function () {
        for (var _i = 0, _a = this.heros; _i < _a.length; _i++) {
            var hero = _a[_i];
            hero.attack();
        }
    };
    return Tribe;
}());
var heros = [archer, knight];
var tribe = new Tribe;
tribe.setHeros(heros);
tribe.attack();
