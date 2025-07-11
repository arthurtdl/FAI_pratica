import { Router } from 'express';
import { DeveloperController } from '../controllers';

const desenvolvedorRouter = Router();

desenvolvedorRouter
  .route('/')
  .post(DeveloperController.create);

export default desenvolvedorRouter;
