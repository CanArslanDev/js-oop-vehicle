const Vehicle = require('./vehicle');

class Truck extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    start() {
        return `${this.getMake()} ${this.getModel()} Tır motoru çalıştı.`;
    }

    stop() {
        return `${this.getMake()} ${this.getModel()} Tır motoru durdu.`;
    }
}

module.exports = Truck;
