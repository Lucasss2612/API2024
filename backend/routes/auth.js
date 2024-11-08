// backend/routes/auth.js
import { Router } from 'express';
import { hash, compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import User, { findOne } from '../models/User'; // Asegúrate de tener un modelo de usuario definido
const router = Router();

// Registro de usuario
router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const hashedPassword = await hash(password, 10);
        const user = new User({ username, email, password: hashedPassword, role });
        await user.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
});

// Inicio de sesión de usuario
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await findOne({ email });
        if (user && compareSync(password, user.password)) {
            const token = sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token, role: user.role });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error en el inicio de sesión', error });
    }
});

export default router;
