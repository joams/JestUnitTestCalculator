import { Request, Response } from 'express';
export default class IndexController {
  public hello(request: Request, response: Response) {
    return response.status(200).send('Hola Jessit Diamante Automation');
  }
}


