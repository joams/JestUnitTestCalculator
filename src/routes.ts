import { Router } from 'express';
import indexRouter from "./apis/index/index.routes"
import calculatorRouter from "./apis/calculator/calculator.routes";

const baseRouter = Router();
baseRouter.use("/", indexRouter);
baseRouter.use("/calculator", calculatorRouter);

export default baseRouter;