import { add as mathAdd } from "mathjs";

export class MathjsAdder {
  add(a: number, b: number) {
    return mathAdd(a, b);
  }
}
