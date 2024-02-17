import { multiply as mathMul } from "mathjs";

export class MathjsMultiplier {
  mul(a: number, b: number) {
    return mathMul(a, b);
  }
}
