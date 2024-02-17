import { add as mathAdd } from "mathjs";
import { IAdder } from "../interfaces/iadder";

export class MathjsAdder implements IAdder {
  add(a: number, b: number) {
    return mathAdd(a, b);
  }
}
