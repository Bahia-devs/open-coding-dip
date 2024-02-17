import { MathjsAdder } from "../adder/implementations/mathjs-adder";
import { Calculator } from "../calculator";
import { MathjsMultiplier } from "../multiplier/implementations/mathjs-multiplier";

export function makeCalculator(): Calculator {
  const multiplier = new MathjsMultiplier();
  const adder = new MathjsAdder();
  const calculator = new Calculator(multiplier, adder);

  return calculator;
}
