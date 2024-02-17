import { multiply as mathMul } from "mathjs";
import { IMultiplier } from "../interfaces/imultiplier";

export class MathjsMultiplier implements IMultiplier {
  mul(a: number, b: number) {
    return mathMul(a, b);
  }
}
