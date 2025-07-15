import { Router } from 'express';
import squadRouter from './SquadRoutes';
import projectRouter from './ProjectRoutes';
import managerRouter from './ManagerRoutes';
import developerRouter from './DeveloperRoutes';

const router = Router();

router.use('/squad', squadRouter);
router.use('/project', projectRouter);
router.use('/manager', managerRouter);
router.use('/developer', developerRouter);

router.route('/').get((_, res) => {
  res.status(200).send('Made with 💚 by CITi');
});

export default router;
