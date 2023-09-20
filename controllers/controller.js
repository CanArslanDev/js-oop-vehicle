const VehicleFactory = require('../vehicles/vehicleFactory');

class Controller {
    constructor() {
        this.vehicleFactory = new VehicleFactory();
    }

    createVehicle(type, make, model) {
        return this.vehicleFactory.createVehicle(type, make, model);
    }
}

module.exports = Controller;
