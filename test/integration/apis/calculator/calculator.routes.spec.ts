import request from 'supertest';
import app from '../../../../src/server';

describe('CalculatorRoutes', () => {
  describe('CalculatorRoutesAdd', () => {
    const path = '/api/calculator/add';
    test(`GET ${path}`, async () => {
      const response = await request(app).get(path).query({
        number1: 5,
        number2: 10,
      });

      expect(response.statusCode).toBe(200);
      expect(response.type).toBe('text/html');
      expect(response.text).toBe('add operation 5, 10 = 15');
      expect(typeof response.text).toBe('string');
      expect(response.text).toEqual(expect.stringContaining('add operation'));
    });
  });
  describe('CalculatorRoutesSubtract', () => {
    const path = '/api/calculator/subtract';
    test(`GET ${path}`, async () => {
      const response = await request(app).get(path).query({
        number1: 5,
        number2: 10,
      });

      expect(response.statusCode).toBe(200);
      expect(response.type).toBe('text/html');
      expect(response.text).toBe('subtract operation 5, 10 = -5');
      expect(typeof response.text).toBe('string');
      expect(response.text).toEqual(expect.stringContaining('subtract operation'));
    });
  });
});
