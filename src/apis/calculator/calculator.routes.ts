import { Router } from "express";
import CalculatorController from './calculator.controller';

const calculatorController = new CalculatorController();

const calculatorRouter = Router();
calculatorRouter.get('/add', calculatorController.add);
calculatorRouter.get('/subtract', calculatorController.subtract);

export default calculatorRouter;