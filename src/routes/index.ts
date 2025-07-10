import { Router } from 'express';
import squadRouter from './SquadRoutes';
import projetoRouter from './ProjetoRoutes';
import gerenteRouter from './GerenteRouter';
import desenvolvedorRouter from './DesenvolvedorRoutes';

const router = Router();

router.use('/squads', squadRouter);
router.use('/projetos', projetoRouter);
router.use('/gerentes', gerenteRouter);
router.use('/desenvolvedores', desenvolvedorRouter);
router.route('/').get((_, res) => {
  res.status(200).send('Made with 💚 and &lt; &#x0002F; &gt; by CITi');
});

export default router;
