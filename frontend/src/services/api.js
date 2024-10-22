import axios from 'axios';

export const getGames = () => axios.get('/api/games');
export const createGame = (data) => axios.post('/api/games', data);
