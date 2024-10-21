import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/api/games');
        setGames(response.data);
      } catch (error) {
        console.error("Error al obtener los videojuegos", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div>
      <h1>Marketplace de Videojuegos</h1>
      <div>
        {games.map((game) => (
          <div key={game._id}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <p>Precio: ${game.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
