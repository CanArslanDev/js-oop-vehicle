const Vehicle = require('./vehicle');

class Car extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    start() {
        return `${this.getMake()} ${this.getModel()} Araba motoru çalıştı.`;
    }

    stop() {
        return `${this.getMake()} ${this.getModel()} Araba motoru durdu.`;
    }
}

module.exports = Car;
