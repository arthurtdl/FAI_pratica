import { Router } from 'express';
import { ManagerController } from '../controllers';

const managerRouter = Router();

managerRouter.route('/')
  .post(
    ManagerController.create,
  );

managerRouter.route('/')
  .get(
    ManagerController.readAll,
  );

export default managerRouter;
