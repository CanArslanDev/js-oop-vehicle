const VehicleInterface = require('./vehicleInterface');

class Vehicle extends VehicleInterface {
    constructor(make, model) {
        super();
        this._make = make;
        this._model = model;
    }

    getMake() {
        return this._make;
    }

    getModel() {
        return this._model;
    }

    setMake(make) {
        this._make = make;
    }

    setModel(model) {
        this._model = model;
    }
}

module.exports = Vehicle;
