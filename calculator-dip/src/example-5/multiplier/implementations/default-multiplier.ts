import { IMultiplier } from "../interfaces/imultiplier";

export class DefaultMultiplier implements IMultiplier {
  mul(a: number, b: number) {
    return a * b;
  }
}
