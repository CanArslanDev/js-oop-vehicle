const Controller = require('./controllers/controller');
const Model = require('./models/model');
const View = require('./views/view');

const controller = new Controller();
const model = new Model();
const view = new View();

const bicycle = controller.createVehicle('bisiklet', 'salcano', 'm1');
const car = controller.createVehicle('araba', 'Audi', 'a4');
const truck = controller.createVehicle('tır', 'man', 'eco');
const motorcycle = controller.createVehicle('motorsiklet', 'honda', 'h2r');

model.addVehicle(bicycle);
model.addVehicle(car);
model.addVehicle(truck);
model.addVehicle(motorcycle);

const vehicles = model.getVehicles();
view.displayVehicles(vehicles);
