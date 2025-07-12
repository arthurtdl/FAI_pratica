import { Router } from 'express';
import { ProjectController } from '../controllers';

const projectRouter = Router();

projectRouter.route('/')
  .post(
    ProjectController.create,
  );

projectRouter.route('/')
  .get(
    ProjectController.readAll,
  );

export default projectRouter;
