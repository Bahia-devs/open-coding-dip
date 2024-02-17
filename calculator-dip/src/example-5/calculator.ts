import { IAdder } from "./adder/interfaces/iadder";
import { IMultiplier } from "./multiplier/interfaces/imultiplier";

export class Calculator {
  private multiplier: IMultiplier;
  private adder: IAdder;

  constructor(multiplier: IMultiplier, adder: IAdder) {
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
