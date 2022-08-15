import Calculator from '../src/calculator';
describe('Calculator', () => {
  const calculatorInstance = new Calculator();
  describe('add', () => {
    test('Should add 5, -8', () => {
      //setup precondition
      const number1 = 5;
      const number2 = -8;
      //function under test
      const addResult = calculatorInstance.add(number1, number2);
      // Validation pos condition
      expect(addResult).toBe(-3);
    });

    test('Should add 87, 76', () => {
      //setup precondition
      const number1 = 87;
      const number2 = 76;
      //function under test
      const addResult = calculatorInstance.add(number1, number2);
      // Validation pos condition
      expect(addResult).toBe(163);
    });

    test('Should add 65, -20', () => {
      //setup precondition
      const number1 = 65;
      const number2 = -20;
      //function under test
      const addResult = calculatorInstance.add(number1, number2);
      // Validation pos condition
      expect(addResult).toBe(45);
    });
  });
  describe('subtract', () => {
    test('Should subtract 65, -20 and result 85', () => {
      //setup precondition
      const number1 = 65;
      const number2 = -20;
      //function under test
      const result = calculatorInstance.subtract(number1, number2);
      // Validation pos condition
      expect(result).toBe(85);
    });
    test('Should subtract 100, 1 and result 99', () => {
      //setup precondition
      const number1 = 100;
      const number2 = 1;
      //function under test
      const result = calculatorInstance.subtract(number1, number2);
      // Validation pos condition
      expect(result).toBe(99);
    });
  });
});
