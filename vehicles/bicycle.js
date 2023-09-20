const Vehicle = require('./vehicle');

class Bicycle extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    start() {
        return `${this.getMake()} ${this.getModel()} Bisiklet Pedalı Dönmeye Başladı`;
    }

    stop() {
        return `${this.getMake()} ${this.getModel()} Bisiklet  Pedalı Dönmüyor.`;
    }
}

module.exports = Bicycle;
