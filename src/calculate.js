import operationMapper from "./operationMapper.js";
import performOperation from "./performOperation.js"

const calculate = (num1, num2, operation) => {
  const operationRequest = {
    num1,
    num2,
    operationSymbol: operationMapper(operation)
  };
  const result = performOperation(operationRequest);

  return {
    operation,
    result,
    operands: [num1, num2],
  }
}

export default calculate;