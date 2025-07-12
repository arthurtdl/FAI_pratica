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


export default developerRouter;
