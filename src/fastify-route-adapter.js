import getOperationFromUrl from "./getOperationFromUrl.js"

export const adaptRoute = (controller) => {
  return (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const operationRequest = {
      num1,
      num2,
      operation: req.params.operation
    };

    const result = controller(operationRequest);

    return res.send(result);
  }
}