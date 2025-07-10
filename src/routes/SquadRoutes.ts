import { Router } from 'express';
import { SquadController } from '../controllers';

const squadRouter = Router();

squadRouter
  .route('/')
  .post(SquadController.create);

export default squadRouter;
