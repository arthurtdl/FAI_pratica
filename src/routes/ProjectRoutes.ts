import { Router } from 'express';
import { ProjectController } from '../controllers';

const projetoRouter = Router();

projetoRouter
  .route('/')
  .post(ProjectController.create);

export default projetoRouter;
