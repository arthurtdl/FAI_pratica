import { Router } from 'express';
import { DesenvolvedorController } from '../controllers';

const desenvolvedorRouter = Router();

desenvolvedorRouter
  .route('/')
  .post(DesenvolvedorController.create);

export default desenvolvedorRouter;
