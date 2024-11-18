import assert from 'node:assert';
import { describe, it } from 'node:test'
import request from "supertest";
import { expressApp } from "../../expressApp.js";

describe("/:operation/ping request tests", () => {
  describe("when checking server status passing an operation as params", () => {
    it("returns a 200 http status response and a body with a message containing the requested operation", async () => {
      const operation = "sub";
      const expectedBody = {
        message: `So you want to perform a ${operation} operation huh?`
      };
      const response = await request(expressApp).get(`/${operation}/ping`);

      assert.deepStrictEqual(response.status, 200);
      assert.deepStrictEqual(response.body, expectedBody);
    });
  });
});

describe("/:operation request tests", () => {
  describe("when requesting to perform a sum between 2 numbers", () => {
    it("returns a 200 http status response and a body with a object containing the right result, the performed operation and both operands", async () => {
      const operation = "sum";
      const num1 = 5;
      const num2 = 5;
      const expectedBody = {
        result: 10,
        operands: [num1, num2],
        operation
      };
      const response = await request(expressApp)
      .get(`/${operation}`)
      .query({ num1, num2 });

      assert.deepStrictEqual(response.status, 200);
      assert.deepStrictEqual(response.body, expectedBody);
    });
  });

  describe("when requesting to perform a subtraction between 2 numbers", () => {
    it("returns a 200 http status response and a body with a object containing the right result, the performed operation and both operands", async () => {
      const operation = "sub";
      const num1 = 50;
      const num2 = 5;
      const expectedBody = {
        result: 45,
        operands: [num1, num2],
        operation
      };
      const response = await request(expressApp)
      .get(`/${operation}`)
      .query({ num1, num2 });

      assert.deepStrictEqual(response.status, 200);
      assert.deepStrictEqual(response.body, expectedBody);
    });
  });

  describe("when requesting to perform a multiplication between 2 numbers", () => {
    it("returns a 200 http status response and a body with a object containing the right result, the performed operation and both operands", async () => {
      const operation = "mul";
      const num1 = 7;
      const num2 = 5;
      const expectedBody = {
        result: 35,
        operands: [num1, num2],
        operation
      };
      const response = await request(expressApp)
      .get(`/${operation}`)
      .query({ num1, num2 });

      assert.deepStrictEqual(response.status, 200);
      assert.deepStrictEqual(response.body, expectedBody);
    });
  });

  describe("when requesting to perform a division between 2 numbers", () => {
    it("returns a 200 http status response and a body with a object containing the right result, the performed operation and both operands", async () => {
      const operation = "div";
      const num1 = 8;
      const num2 = 2;
      const expectedBody = {
        result: 4,
        operands: [num1, num2],
        operation
      };
      const response = await request(expressApp)
      .get(`/${operation}`)
      .query({ num1, num2 });

      assert.deepStrictEqual(response.status, 200);
      assert.deepStrictEqual(response.body, expectedBody);
    });
  });
});