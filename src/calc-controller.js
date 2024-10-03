import { calculateService } from './calc-service.js';

export const calculateController = (calcService, operationRequest) => {
  // TODO: handle possible errors here
  const result = calcService(operationRequest);

  return result;
};

export const makeController = (service = calculateService) => {
  // currying baby!
  return calculateController.bind(null, service);
};
