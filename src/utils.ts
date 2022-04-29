import { Operator } from "./interfaces";

const OperatorHandler = {
  "+"(a: number, b: number) {
    return a + b;
  },
  "-"(a: number, b: number) {
    return a - b;
  },
  "*"(a: number, b: number) {
    return a * b;
  },
  "/"(a: number, b: number) {
    return a / b;
  }
}

export function reflectOperator(
  op: Operator,
  arg1: string,
  arg2: string
) {
  return OperatorHandler[op](parseFloat(arg1), parseFloat(arg2));
}