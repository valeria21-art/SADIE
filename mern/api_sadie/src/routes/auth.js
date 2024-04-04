const personaSchema = require('../models/personas')
const express = require("express");
const { Router } = express;


const router = Router();
// Ruta para el inicio de sesión y generación del token JWT
router.post('/login', async (req, res) => {
  try {
    const { correo, password } = req.body;
    const user = await personaSchema.findOne({ correo: correo});

    if (!user)return res.status(401).json({ message: 'Usuario no encontrado' });

    const contraseñaValida = await personaSchema.findOne({ password: password});

    if (!contraseñaValida)return res.status(401).json({ message: 'Contraseña incorrecta' });
    
    res.status(200).json({
        message: 'Inicio de sesión exitoso',
      });
  
  } catch (error) {
    console.error('Error al iniciar sesión:', error, );
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;