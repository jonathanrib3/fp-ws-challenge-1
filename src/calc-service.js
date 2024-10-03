const mappedOperations = {
  'sum' : (a, b) => a + b,
  'sub' : (a, b) => a - b,
  'mul' : (a, b) => a * b,
  'div' : (a, b) => a / b,
}

export const calculateService = ({ 
  num1, num2, operation
}) => {
  const result = mappedOperations[operation](num1, num2);

  return {
    result,
    operands: [num1, num2],
    operation
  }
};
