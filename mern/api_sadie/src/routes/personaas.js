const express = require('express');
const personaSchema = require('../models/personas');

const router = express.Router();

// Crear personas
router.post('/personas', async (req, res) => {
    try {
        const nuevopersonas = await personaSchema.create(req.body);
        res.status(201).json({ message: 'Se agregó la información del Usuario', data: nuevopersonas });
    } catch (error) {
        console.error('Error al crear el Usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Buscar todos los personass
router.get('/personas', (req, res) => {
    personaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error, query: 'selectAll' }));
});

// Buscar personas por ID
router.get('/personas/:id', (req, res) => {
    const { id } = req.params;
    personaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error, query: 'selectOne' }));
});

// Actualizar personas por ID
router.put('/personas/:id', (req, res) => {
    const { id } = req.params;
    const { tdocpersonas, ndocpersonas, nombres, apellidos, correo, password, fkrol, asistencia, createdAt } = req.body;
    personaSchema
        .updateOne({ _id: id }, { $set: { tdocpersonas, ndocpersonas, nombres, apellidos, correo, password, fkrol, asistencia, createdAt } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error, query: 'updateOne' }));
});


// Eliminar personas por ID
router.delete('/personas/:id', (req, res) => {
    const { id } = req.params;
    personaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error, query: 'deleteOne' }));
});

module.exports = router;