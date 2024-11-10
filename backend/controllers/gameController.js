import Game, { find } from '../models/game';

// Obtener todos los videojuegos
export async function getGames(req, res) {
  try {
    const games = await find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener videojuegos' });
  }
}
// Crear un nuevo videojuego
export async function createGame(req, res) {
  const { name, category, price, description, developer, systemRequirements } = req.body;
  const newGame = new Game({ name, category, price, description, developer, systemRequirements });
  
  try {
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el videojuego' });
  }
}
