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

squadRouter.route('/:id')
  .get(
    SquadController.readOne,
  );

squadRouter.route('/:id')
  .patch(
    SquadController.update
  );

squadRouter.route('/:id')
  .delete(
    SquadController.delete
  );

export default squadRouter;
