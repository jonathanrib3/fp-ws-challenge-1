import calculate from "./calculate.js";
import getOperationFromUrl from "./getOperationFromUrl.js";

const fastifyOperationAdapter = (req) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2)
  const operation = getOperationFromUrl(req.originalUrl);

  return calculate(num1, num2, operation);
}

export default fastifyOperationAdapter