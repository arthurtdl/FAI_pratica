import { Router } from 'express';
import { ProjetoController } from '../controllers';

const projetoRouter = Router();

projetoRouter
  .route('/')
  .post(ProjetoController.create);

export default projetoRouter;
