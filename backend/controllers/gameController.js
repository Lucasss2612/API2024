const Game = require('../models/game');

// Obtener todos los videojuegos
exports.getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener videojuegos' });
  }
};
// Crear un nuevo videojuego
exports.createGame = async (req, res) => {
  const { name, category, price, description, developer, systemRequirements } = req.body;
  const newGame = new Game({ name, category, price, description, developer, systemRequirements });
  
  try {
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el videojuego' });
  }
};
