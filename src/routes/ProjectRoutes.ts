import { Router } from 'express';
import { ProjectController } from '../controllers';

const projectRouter = Router();

projectRouter
  .route('/')
  .post(ProjectController.create);

export default projectRouter;
