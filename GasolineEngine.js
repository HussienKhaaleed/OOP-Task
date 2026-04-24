const Engine = require('./Engine');

class GasolineEngine extends Engine {
  constructor() {
    super();
  }

  onSpeedAdvised(carSpeed) {
    super.onSpeedAdvised(carSpeed);
  }

  getType() {
    return 'GasolineEngine';
  }
}

module.exports = GasolineEngine;
