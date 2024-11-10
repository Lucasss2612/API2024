const express = require('express');
const router = express.Router();
const Game = require('../models/Game'); // Asegúrate de que Game esté correctamente definido en tu modelo

// Ejemplo de ruta para obtener juegos
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los juegos' });
    }
});

// Más rutas aquí...

module.exports = router;
