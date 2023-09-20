class VehicleInterface {
    start() {
        if (this.start === VehicleInterface.prototype.start) {
            throw new Error("Subclasses must implement the start method.");
        }
    }

    stop() {
        if (this.stop === VehicleInterface.prototype.stop) {
            throw new Error("Subclasses must implement the stop method.");
        }
    }
}

module.exports = VehicleInterface;
