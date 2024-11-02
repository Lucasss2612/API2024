const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Importa las rutas
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/games');
const vendorRoutes = require('./routes/vendorRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Rutas de la API
app.use('./routes/auth', authRoutes);         // Rutas para autenticación
app.use('./routes/games', gameRoutes);         // Rutas para gestión de videojuegos
app.use('./routes/vendorRoutes', vendorRoutes);      // Rutas para gestión del vendedor

// Puerto del servidor
const PORT = process.env.PORT || 5001; // Cambiar a otro puerto
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
