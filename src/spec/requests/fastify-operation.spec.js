import request from "supertest";
import { fastifyApp } from "../../fastifyApp.js";

describe("/:operation/ping request tests", () => {
  describe("when checking server status passing an operation as params", () => {
    it("returns a 200 http status response", async () => {
      await fastifyApp.ready();

      const response = await request(fastifyApp.server).get("/sum/ping");

      expect(response.status).toBe(200);
    });

    it("returns a message containing the requested operation", async () => {
      await fastifyApp.ready();

      const operation = "subtraction";
      const response = await request(fastifyApp.server).get(`/${operation}/ping`);
      const expectedBody = {
        message: `So you want to perform a ${operation} operation huh?`
      };

      expect(response.body).toMatchObject(expectedBody);
    })
  });
});

describe("/:operation request tests", () => {
  describe("when requesting to perform a sum between 2 numbers", () => {
    it("returns a 200 http status response", async () => {
      await fastifyApp.ready();

      const response = await request(fastifyApp.server).get("/sum/ping");

      expect(response.status).toBe(200);
    });

    it("returns an object containing the right result, the performed operation and both operands", async () => {
      const operation = "sum";
      const num1 = 5;
      const num2 = 5;
      const response = await request(fastifyApp.server)
        .get("/sum")
        .query({ num1, num2 });
      const expectedBody = {
        result: 10,
        operands: [num1, num2],
        operation
      };

      expect(response.body).toMatchObject(expectedBody);
    });
  });

  describe("when requesting to perform a subtraction between 2 numbers", () => {
    it("returns a 200 http status response", async () => {
      const response = await request(fastifyApp.server).get("/sub/ping");

      expect(response.status).toBe(200);
    });

    it("returns an object containing the right result, the performed operation and both operands", async () => {
      const operation = "sub";
      const num1 = 50;
      const num2 = 5;
      const response = await request(fastifyApp.server)
        .get("/sub")
        .query({ num1, num2 });
      const expectedBody = {
        result: 45,
        operands: [num1, num2],
        operation
      };

      expect(response.body).toMatchObject(expectedBody);
    });
  });

  describe("when requesting to perform a multiplication between 2 numbers", () => {
    it("returns a 200 http status response", async () => {
      await fastifyApp.ready();

      const response = await request(fastifyApp.server).get("/mul/ping");

      expect(response.status).toBe(200);
    });

    it("returns an object containing the right result, the performed operation and both operands", async () => {
      await fastifyApp.ready();

      const operation = "mul";
      const num1 = 7;
      const num2 = 5;
      const response = await request(fastifyApp.server)
        .get("/mul")
        .query({ num1, num2 });
      const expectedBody = {
        result: 35,
        operands: [num1, num2],
        operation
      };

      expect(response.body).toMatchObject(expectedBody);
    });
  });

  describe("when requesting to perform a division between 2 numbers", () => {
    it("returns a 200 http status response", async () => {
      await fastifyApp.ready();

      const response = await request(fastifyApp.server).get("/div/ping");

      expect(response.status).toBe(200);
    });

    it("returns an object containing the right result, the performed operation and both operands", async () => {
      await fastifyApp.ready();

      const operation = "div";
      const num1 = 8;
      const num2 = 2;
      const response = await request(fastifyApp.server)
        .get("/div")
        .query({ num1, num2 });
      const expectedBody = {
        result: 4,
        operands: [num1, num2],
        operation
      };

      expect(response.body).toMatchObject(expectedBody);
    });
  });
});