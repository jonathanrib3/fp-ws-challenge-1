import { calculateService } from "../calc-service.js";

describe("calculateService()", () => {
  describe("when requesting the service to sum 2 numbers", () => {
    const num1 = 5;
    const num2 = 3;
    const operation = 'sum';
    const expectedResult = {
      result: 8,
      operation,
      operands: [num1, num2]
    }

    it("returns an object containing the correct result, both operands and the requested operation", () => {
      expect(calculateService({ num1, num2, operation })).toMatchObject(expectedResult);
    });
  });

  describe("when requesting the service to subtract 2 numbers", () => {
    const num1 = 10;
    const num2 = 3;
    const operation = 'sub';
    const expectedResult = {
      result: 7,
      operation,
      operands: [num1, num2]
    }

    it("returns an object containing the correct result, both operands and the requested operation", () => {
      expect(calculateService({ num1, num2, operation })).toMatchObject(expectedResult);
    });
  });

  describe("when requesting the service to multiply 2 numbers", () => {
    const num1 = 5;
    const num2 = 3;
    const operation = 'mul';
    const expectedResult = {
      result: 15,
      operation,
      operands: [num1, num2]
    }

    it("returns an object containing the correct result, both operands and the requested operation", () => {
      expect(calculateService({ num1, num2, operation })).toMatchObject(expectedResult);
    });
  });

  describe("when requesting the service to divide 2 numbers", () => {
    const num1 = 18;
    const num2 = 3;
    const operation = 'div';
    const expectedResult = {
      result: 6,
      operation,
      operands: [num1, num2]
    }

    it("returns an object containing the correct result, both operands and the requested operation", () => {
      expect(calculateService({ num1, num2, operation })).toMatchObject(expectedResult);
    });
  });
});