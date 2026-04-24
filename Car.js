class Car {
  constructor(engine) {
    this.engine = engine;
    this.speed = 0;
    this.running = false;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.speed = 0;
    this.engine.onSpeedAdvised(this.speed);
  }

  stop() {
    if (!this.running) return;
    if (this.speed != 0) return;
    this.running = false;
  }

  accelerate() {
    if (!this.running) return;
    if (this.speed >= 200) return;
    this.speed += 20;
    this.engine.onSpeedAdvised(this.speed);
  }

  brake() {
    if (!this.running) return;
    if (this.speed <= 0) return;
    this.speed -= 20;
    this.engine.onSpeedAdvised(this.speed);
  }

  replaceEngine(newEngine) {
    this.engine = newEngine;
    this.engine.onSpeedAdvised(this.speed);
  }
}

module.exports = Car;
