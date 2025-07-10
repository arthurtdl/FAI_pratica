import { Router } from 'express';
import { GerenteController } from '../controllers';

const gerenteRouter = Router();

gerenteRouter
  .route('/')
  .post(GerenteController.create);

export default gerenteRouter;
