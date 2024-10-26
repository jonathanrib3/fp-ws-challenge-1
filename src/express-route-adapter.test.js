import assert from 'node:assert';
import { describe, it, mock } from 'node:test';

import { adaptRoute } from "./express-route-adapter.js";

describe('Express Route Adapter', () => {
  it('adapts an express route to a controller', () => {
    const controller = mock.fn(() => 'some result');
    const expressRouteHandler = adaptRoute(controller);
    const req = {
      query: {
        num1: '1',
        num2: '2'
      },
      params: {
        operation: 'add',
      },
    }

    const res = {
      send: mock.fn(),
    };

    expressRouteHandler(req, res);

    assert.deepStrictEqual(controller.mock.callCount(), 1);
    assert.deepStrictEqual(controller.mock.calls[0].arguments, [{ num1: 1, num2: 2, operation: 'add'}]);

    assert.deepStrictEqual(res.send.mock.callCount(), 1);
    assert.deepStrictEqual(res.send.mock.calls[0].arguments, ['some result']);
  });
});
