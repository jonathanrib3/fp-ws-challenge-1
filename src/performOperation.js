const performOperation = (operationRequest) => {
  const { operationSymbol, num1, num2 } = operationRequest;

  const operate = new Function("x", "y", `return x${operationSymbol}y`);

  return operate(num1, num2, operationSymbol);
}

export default performOperation;
