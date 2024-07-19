import { Router, Request, Response } from 'express';
import getData from '../../controllers/dataController';

const router = Router();

router.get('/data', getData);

export default router;