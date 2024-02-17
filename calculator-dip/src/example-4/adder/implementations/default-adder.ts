import { IAdder } from "../interfaces/iadder";

export class DefaultAdder implements IAdder {
  add(a: number, b: number) {
    return a + b;
  }
}
