const Engine = require('./Engine');

class ElectronicEngine extends Engine {
  constructor() {
    super();
  }

  onSpeedAdvised(carSpeed) {
    super.onSpeedAdvised(carSpeed);
  }

  getType() {
    return 'ElectronicEngine';
  }
}

module.exports = ElectronicEngine;
