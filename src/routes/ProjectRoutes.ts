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

projectRouter.route('/:id')
  .get(
    ProjectController.readOne,
  );

projectRouter.route('/:id')
  .patch(
    ProjectController.update
  );

projectRouter.route('/:id')
  .delete(
    ProjectController.delete
  );
  
export default projectRouter;
