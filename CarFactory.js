const Car = require('./Car');
const GasolineEngine = require('./GasolineEngine');
const ElectronicEngine = require('./ElectronicEngine');
const MixedHybridEngine = require('./MixedHybridEngine');

class CarFactory {
  createCar(engineType) {
    let engine;

    if (engineType === 'gasoline') {
      engine = new GasolineEngine();
    } else if (engineType === 'electric') {
      engine = new ElectronicEngine();
    } else if (engineType === 'hybrid') {
      engine = new MixedHybridEngine();
    }

    return new Car(engine);
  }

  replaceEngine(car, engineType) {
    let engine;

    if (engineType === 'gasoline') {
      engine = new GasolineEngine();
    } else if (engineType === 'electric') {
      engine = new ElectronicEngine();
    } else if (engineType === 'hybrid') {
      engine = new MixedHybridEngine();
    }

    car.replaceEngine(engine);
  }
}

module.exports = CarFactory;
