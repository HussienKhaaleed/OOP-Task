const CarFactory = require('./CarFactory');

const factory = new CarFactory();

const gasCar = factory.createCar('gasoline');
gasCar.start();
gasCar.accelerate();
gasCar.accelerate();
gasCar.accelerate();
gasCar.brake();
gasCar.brake();
gasCar.brake();
gasCar.stop();

const electricCar = factory.createCar('electric');
electricCar.start();
electricCar.accelerate();
electricCar.accelerate();
electricCar.brake();
electricCar.brake();
electricCar.stop();

const hybridCar = factory.createCar('hybrid');
hybridCar.start();
hybridCar.accelerate();
hybridCar.accelerate();
hybridCar.accelerate();
hybridCar.accelerate();
hybridCar.brake();
hybridCar.brake();
hybridCar.brake();
hybridCar.brake();
hybridCar.stop();

const mutableCar = factory.createCar('gasoline');
mutableCar.start();
mutableCar.accelerate();
factory.replaceEngine(mutableCar, 'hybrid');
mutableCar.accelerate();
mutableCar.accelerate();
mutableCar.brake();
mutableCar.brake();
mutableCar.brake();
mutableCar.stop();
