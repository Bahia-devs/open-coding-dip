import { DefaultAdder } from "./adder/default-adder";
import { DefaultMultiplier } from "./multiplier/default-multiplier";

class Calculator {
  private multiplier: DefaultMultiplier;
  private adder: DefaultAdder;

  constructor() {
    this.multiplier = new DefaultMultiplier();
    this.adder = new DefaultAdder();
  }

  mul(a: number, b: number) {
    return this.multiplier.mul(a, b);
  }

  add(a: number, b: number) {
    return this.adder.add(a, b);
  }
}

const calculator = new Calculator();

console.log(calculator.add(1, 2));
console.log(calculator.mul(2, 3));
