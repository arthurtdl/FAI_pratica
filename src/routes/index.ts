// src/routes/index.ts
import { Router } from 'express';
import squadRouter from './SquadRoutes';
import projectRouter from './ProjectRoutes';
import managerRouter from './ManagerRoutes';
import developerRouter from './DeveloperRoutes';

const router = Router();

router.use('/squads', squadRouter);
router.use('/projects', projectRouter);
router.use('/managers', managerRouter);
router.use('/developers', developerRouter);

router.route('/').get((_, res) => {
  res.status(200).send('Made with 💚 by CITi');
});

export default router;
