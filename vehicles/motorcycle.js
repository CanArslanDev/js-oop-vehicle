const Vehicle = require('./vehicle');

class Motorcycle extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }

    start() {
        return `${this.getMake()} ${this.getModel()} Motorsiklet motoru çalıştı.`;
    }

    stop() {
        return `${this.getMake()} ${this.getModel()} Motorsiklet motoru durdu.`;
    }
}

module.exports = Motorcycle;
