export const adaptRoute = (controller) => {
  return (req, res) => {
    // TODO: validate input here
    const operationRequest = {
      num1: Number(req.query.num1),
      num2: Number(req.query.num2),
      operation: req.params.operation,
    };

    const operationResult = controller(operationRequest);

    res.send(operationResult);
  };
};
