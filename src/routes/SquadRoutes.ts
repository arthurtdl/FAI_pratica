import { Router } from 'express';
import { SquadController } from '../controllers';

const squadRouter = Router();

squadRouter.route('/')
  .post(
    SquadController.create,
  );

squadRouter.route('/')
  .get(
    SquadController.readAll,
  );

export default squadRouter;
