import { jest } from "@jest/globals";
import { adaptRoute } from "../fastify-route-adapter.js"

describe("adaptRoute()", () => {
  describe("when receiving a controller", () => {
    const num1 = 2;
    const num2 = 3;
    const operation = 'sum';
    const operationRequest = {
      num1,
      num2,
      operation
    }
    const mockController = jest.fn(() => {
      return {
        operands: [num1, num2],
        result: 5,
        operation
      }
    });
    const mockRequest = {
      query: {
        num1,
        num2
      },
      params: {
        operation
      }
    }
    const mockResponse = {
      send() {
        return 'Response sended!'
      }
    }
    const responseSpy = jest.spyOn(mockResponse, 'send')

    it("returns a function", () => {
      expect(adaptRoute(mockController) instanceof Function).toBeTruthy();
    });

    it("returns a fastify adapter that receives a request, executes the controller with request data, and returns a response", () => {
      const adapter = adaptRoute(mockController);
      const result = adapter(mockRequest, mockResponse);

      expect(result).toEqual('Response sended!');
      expect(responseSpy).toHaveBeenCalled();
      expect(mockController).toHaveBeenCalledWith(operationRequest)
    });
  });
});