const express = require('express');
const router = express.Router();

// Ejemplo de ruta de autenticación
router.post('/login', (req, res) => {
  res.send('Login route');
});

module.exports = router;
