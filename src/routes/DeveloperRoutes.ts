import { Router } from 'express';
import { DeveloperController } from '../controllers';

const developerRouter = Router();

developerRouter.route('/')
  .post(
    DeveloperController.create,
  );

developerRouter.route('/')
  .get(
    DeveloperController.readAll,
  );

developerRouter.route('/:id')
  .get(
    DeveloperController.readOne,
  );

developerRouter.route('/:id')
  .patch(
    DeveloperController.update
  );

developerRouter.route('/:id')
  .delete(
    DeveloperController.delete
  );

export default developerRouter;
