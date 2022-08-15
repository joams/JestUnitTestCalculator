import Calculator from '../../../src/calculator';
import CalculatorController from '../../../src/apis/calculator/calculator.controller';
describe('CalculatorController', () => {
  const controller = new CalculatorController();
  test('should add 1,2', () => {
    // PRECONDITIONS
    const number1 = '1';
    const number2 = '2';
    const request: any = {
      query: {
        number1,
        number2,
      },
    };
    const mockResult = 3;
    jest.spyOn(Calculator.prototype, 'add').mockReturnValueOnce(mockResult);
    // MOCKING
    const responseMock: any = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    // FUNCTION UNDER TEST
    controller.add(request, responseMock);
    // POST CONDITIONS (VALIDATIONS)
    expect(responseMock.status).toBeCalled();
    expect(responseMock.status).toBeCalledWith(200);
    expect(responseMock.send).toBeCalled();
    expect(responseMock.send).toBeCalledWith(`add operation ${number1}, ${number2} = ${mockResult}`)   
  });
  test('should subtract 1,2', () => {
    // PRECONDITIONS
    const number1 = '1';
    const number2 = '2';
    const request: any = {
      query: {
        number1,
        number2,
      },
    };
    const mockResult = -1;
    jest.spyOn(Calculator.prototype, 'subtract').mockReturnValueOnce(mockResult);
    // MOCKING
    const responseMock: any = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    // FUNCTION UNDER TEST
    controller.subtract(request, responseMock);
    // POST CONDITIONS (VALIDATIONS)
    expect(responseMock.status).toBeCalled();
    expect(responseMock.status).toBeCalledWith(200);
    expect(responseMock.send).toBeCalled();
    expect(responseMock.send).toBeCalledWith(`subtract operation ${number1}, ${number2} = ${mockResult}`);
  });
});
