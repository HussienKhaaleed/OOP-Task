class Engine {
  constructor() {
    this.speed = 0;
  }

  increase() {
    this.speed++;
  }

  decrease() {
    if (this.speed > 0) {
      this.speed--;
    }
  }

  getSpeed() {
    return this.speed;
  }

  onSpeedAdvised(carSpeed) {
    while (this.speed < carSpeed) {
      this.increase();
    }
    while (this.speed > carSpeed) {
      this.decrease();
    }
  }
}

module.exports = Engine;
