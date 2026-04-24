const Engine = require('./Engine');
const GasolineEngine = require('./GasolineEngine');
const ElectronicEngine = require('./ElectronicEngine');

class MixedHybridEngine extends Engine {
  constructor() {
    super();
    this.gasEngine = new GasolineEngine();
    this.electricEngine = new ElectronicEngine();
  }

  onSpeedAdvised(carSpeed) {
    super.onSpeedAdvised(carSpeed);

    if (carSpeed < 50) {
      this.electricEngine.onSpeedAdvised(carSpeed);
      this.gasEngine.onSpeedAdvised(0);
    } else {
      this.gasEngine.onSpeedAdvised(carSpeed);
      this.electricEngine.onSpeedAdvised(0);
    }
  }

  getType() {
    return 'MixedHybridEngine';
  }
}

module.exports = MixedHybridEngine;
