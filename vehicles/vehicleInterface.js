class VehicleInterface {
    start() {
        if (this.start === VehicleInterface.prototype.start) {
            throw new Error("Alt sınıflarda start yöntemi kullanılmıyor.");
        }
    }

    stop() {
        if (this.stop === VehicleInterface.prototype.stop) {
            throw new Error("Alt sınıflarda stop yöntemi kullanılmıyor.");
        }
    }
}

module.exports = VehicleInterface;
