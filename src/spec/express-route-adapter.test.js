import assert from 'node:assert'
import { describe, it, mock } from 'node:test'
import { adaptRoute } from "../express-route-adapter.js"

describe("adaptRoute()", () => {
  describe("when receiving a controller", () => {
    it("returns an express adapter that receives a request, executes the controller with request data, and returns a response", () => {
      const num1 = 2;
      const num2 = 3;
      const operation = 'sum';
      const operationRequest = {
        num1,
        num2,
        operation
      }
      const controller = mock.fn(() => 'something?');
      const req = {
        query: {
          num1,
          num2
        },
        params: {
          operation
        }
      }
      const res = {
        send: mock.fn(),
      }
      const adapter = adaptRoute(controller);

      adapter(req, res);

      assert.deepStrictEqual(controller.mock.callCount(),  1);
      assert.deepStrictEqual(controller.mock.calls[0].arguments, [operationRequest]);
      assert.deepStrictEqual(res.send.mock.callCount(), 1);
      assert.deepStrictEqual(res.send.mock.calls[0].arguments, ['something?']);
    });
  });
});