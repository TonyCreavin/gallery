import { Router } from 'express';

import painting from './paintings/routes';
import category from './categories/routes';

const router = Router();
router.use('/categories', category);

router.use('/paintings', painting);

export default router;
