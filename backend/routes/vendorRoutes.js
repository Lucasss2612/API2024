import { Router } from 'express';
const router = Router();
import { registerGame, getGameStats, editGame, deleteGame } from '../controllers/vendorController';
import authMiddleware from '../middlewares/authMiddleware';

router.post('/games', authMiddleware, registerGame);
router.get('/games/stats', authMiddleware, getGameStats);
router.put('/games/:id', authMiddleware, editGame);
router.delete('/games/:id', authMiddleware, deleteGame);

export default router;
