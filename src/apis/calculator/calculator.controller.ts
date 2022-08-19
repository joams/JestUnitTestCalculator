import { Request, Response } from 'express';
import Calculator, { example } from '../../calculator';

const calculator = new Calculator(); //instanciar
class CalculatorController {
  public add(request: Request, response: Response) {
    const query: any = request.query;
    const number1=Number.parseInt(query.number1);
    const number2=Number.parseInt(query.number2);
    const result = calculator.add(number1, number2);
    response.status(200).send(`add operation ${number1}, ${number2} = ${result}`);
  }
  public subtract(request: Request, response: Response) {
    const query: any = request.query;
    const number1=Number.parseInt(query.number1);
    const number2=Number.parseInt(query.number2);
    const result = calculator.subtract(number1, number2);
    response.status(200).send(`subtract operation ${number1}, ${number2} = ${result}`);
  }
}

export default CalculatorController;
