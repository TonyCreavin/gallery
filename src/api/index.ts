import { Router } from 'express';

import painting from './paintings/routes';

const router = Router();

router.use('/paintings', painting);

export default router;
