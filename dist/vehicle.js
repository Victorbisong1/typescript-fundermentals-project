"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start();
//# sourceMappingURL=vehicle.js.map