const Bicycle = require('./bicycle');
const Car = require('./car');
const Truck = require('./truck');
const Motorcycle = require('./motorcycle');

class VehicleFactory {
    createVehicle(type, make, model) {
        switch (type) {
            case 'bisiklet':
                return new Bicycle(make, model);
            case 'araba':
                return new Car(make, model);
            case 'tır':
                return new Truck(make, model);
            case 'motorsiklet':
                return new Motorcycle(make, model);
            default:
                throw new Error('Bilinmeyen Tür.');
        }
    }
}

module.exports = VehicleFactory;
