// import { DefaultAdder } from "./adder/implementations/default-adder";
// import { DefaultMultiplier } from "./multiplier/implementations/default-multiplier";
import { MathjsAdder } from "./adder/implementations/mathjs-adder";
import { MathjsMultiplier } from "./multiplier/implementations/mathjs-multiplier";

class Calculator {
  private multiplier: MathjsMultiplier;
  private adder: MathjsAdder;

  constructor(multiplier: MathjsMultiplier, adder: MathjsAdder) {
    this.multiplier = multiplier;
    this.adder = adder;
  }

  mul(a: number, b: number) {
    return this.multiplier.mul(a, b);
  }

  add(a: number, b: number) {
    return this.adder.add(a, b);
  }
}

const multiplier = new MathjsMultiplier();
const adder = new MathjsAdder();

const calculator = new Calculator(multiplier, adder);

console.log(calculator.add(1, 2));
console.log(calculator.mul(2, 3));
