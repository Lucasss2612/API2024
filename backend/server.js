const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Importa las rutas
const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/games');
const vendorRoutes = require('./routes/vendorRoutes');

dotenv.config(); // Cargar variables de entorno
const app = express();

app.use(cors());
app.use(express.json()); // Middleware para analizar JSON

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Rutas de la API
app.use('/api/auth', authRoutes);         // Rutas para autenticación
app.use('/api/games', gameRoutes);        // Rutas para gestión de videojuegos
app.use('/api/vendor', vendorRoutes);     // Rutas para gestión del vendedor

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
