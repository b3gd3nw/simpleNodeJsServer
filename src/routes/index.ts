import { Router, Request, Response} from 'express';
import dataRoutes from './api/data';

const router = Router();

router.use('/api', dataRoutes);

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default router;
