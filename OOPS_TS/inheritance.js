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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.setCoordX = function (x) {
        this.coordX = x;
    };
    Animal.prototype.setCoordY = function (y) {
        this.coordY = y;
    };
    Animal.prototype.eat = function () {
        console.log("I'm eating.");
    };
    Animal.prototype.sleep = function () {
        console.log("I'm sleeping.");
    };
    Animal.prototype.move = function () {
        console.log("I'm moving.");
    };
    Animal.prototype.makeNoise = function () {
        console.log("Make noise.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeNoise = function () {
        console.log('Bark!');
    };
    Dog.prototype.returnowner = function () {
        console.log("I'm currently at (".concat(this.coordX, ",").concat(this.coordY, ") & i'm returing to my owner"));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeNoise = function () {
        console.log('Meow!');
    };
    return Cat;
}(Animal));
var dog = new Dog;
dog.setCoordX(5);
dog.setCoordY(5);
var cat = new Cat;
// dog.makeNoise();
// cat.makeNoise();
dog.returnowner();
