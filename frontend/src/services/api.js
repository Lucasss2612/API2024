import axios from 'axios';

// Configuración de la URL base del backend
const API_URL = 'http://localhost:5000/api';

// Función para obtener todos los videojuegos
export const getGames = async () => {
  try {
    const response = await axios.get(`${API_URL}/games`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener juegos:', error);
    throw error;
  }
};

// Función para registrar un videojuego (para vendedores)
export const registerGame = async (gameData, token) => {
  try {
    const response = await axios.post(`${API_URL}/vendor/games`, gameData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error al registrar juego:', error);
    throw error;
  }
};

// Función para obtener las estadísticas de un videojuego
export const getGameStats = async (gameId, token) => {
  try {
    const response = await axios.get(`${API_URL}/vendor/games/stats/${gameId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener estadísticas del juego:', error);
    throw error;
  }
};

// Función para iniciar sesión
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

// Función para registrarse
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error al registrarse:', error);
    throw error;
  }
};
