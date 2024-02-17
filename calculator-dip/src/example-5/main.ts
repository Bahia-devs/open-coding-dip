import { makeCalculator } from "./factories/calculator.factory";

const calculator = makeCalculator();

console.log(calculator.add(1, 2));
console.log(calculator.mul(2, 3));
