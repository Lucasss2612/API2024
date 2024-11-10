const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ejemplo de ruta protegida
router.post('/games', authMiddleware, vendorController.registerGame);
router.get('/games/stats', authMiddleware, vendorController.getGameStats);
router.put('/games/:id', authMiddleware, vendorController.editGame);
router.delete('/games/:id', authMiddleware, vendorController.deleteGame);

module.exports = router;
