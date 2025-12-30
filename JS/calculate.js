export function operate (num1, num2, operand) {
    if (operand == "+") return roundToTwo(num1 + num2);
    else if (operand == "-") return roundToTwo(num1 - num2);
    else if (operand == "*") return roundToTwo(num1 * num2);
    else if (operand == "/") {
        if (num2 == 0) return undefined;
        return roundToTwo(num1 / num2)
    }
    else if (operand == "%") {
        if (num2 == 0) return undefined;
        return roundToTwo(num1 % num2)
    }
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}