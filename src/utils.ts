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
  const result = OperatorHandler[op](parseFloat(arg1), parseFloat(arg2));
  return parseFloat(result.toFixed(2));
}