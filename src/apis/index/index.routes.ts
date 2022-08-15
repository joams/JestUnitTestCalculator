import { Router } from "express";
import IndexController from './index.controller';

const indexController = new IndexController();

const indexRouter = Router();
indexRouter.get('/', indexController.hello);

export default indexRouter;