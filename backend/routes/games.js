import { Router } from 'express';
import { getGames, createGame } from '../controllers/gameController';
const router = Router();

router.get('/', getGames);
router.post('/', createGame);

export default router;
