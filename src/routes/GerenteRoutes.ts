import { Router } from 'express';
import { managerController } from '../controllers';

const managerRouter = Router();

managerRouter.route('/').post(managerController.create);

export default managerRouter;
