class View {
    displayVehicles(vehicles) {
        console.log("Araç Listeleri:");
        vehicles.forEach((vehicle, index) => {
            console.log(`${index + 1}. ${vehicle.start()}`);
        });
    }
}

module.exports = View;
