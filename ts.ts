interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log("stop");
  },
  color: "white",
  wheels: 3,
  start() {},
};

class Bmw implements Car {
  color: string;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go...");
  }
}

interface Toy {
  color: string;
  name: number;
}

interface Car2 {
  name2: string;
}

interface TodyCar extends Toy, Car2 {
  price: number;
}

//

interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

function showName() {
  console.log(this.name);
}

const a = showName.bind(Sam);
a();
