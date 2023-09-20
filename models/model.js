class Model {
    constructor() {
        this.vehicles = [];
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }

    getVehicles() {
        return this.vehicles;
    }
}

module.exports = Model;
