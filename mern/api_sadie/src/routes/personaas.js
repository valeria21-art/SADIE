const express = require('express');
const personaSchema = require('../models/personas');

const router = express.Router();

// Crear personas
/**
 * @swagger
 *  components:
 *    schemas:
 *      personas:
 *        type: object
 *        properties:
 *          tdocpersonas:
 *           type: String
 *           description: tipo documento
 *          ndocpersonas:
 *           type: String
 *           description: N° documento
 *          nombres:
 *           type: String
 *           description: Nombres del usuario
 *          apellidos:
 *           type: String,
 *           description: Apellidos del usuario
 *          direccion:
 *           type: String
 *           description: Direccion del usuario
 *          telefono:
 *           type: String
 *           description: Telefono del usuario
 *          correo:
 *           type: String
 *           description: Correo del usuario 
 *          fkrol:
 *            type: string
 *            description: Rol del usuario
 *          password:
 *            type: string
 *            description: Contraseña del usuario
 *          asistencia:
 *            type: string
 *            description: Estado de asistencia
 *          createdAt:
 *            type: Date
 *            description: Fecha del reporte
 *        required:
 *            - tdocpersonas
 *            - ndocpersonas
 *            - nombres
 *            - apellidos
 *            - direccion
 *            - telefono
 *            - correo
 *            - fkrol
 *            - password
 *            - asistencia
 *            - createdAt
 *        example:
 *            tdocpersonas: 660ba3b92bfd48f7fe76c475
 *            ndocpersonas: 897656789
 *            nombres: Luis Carlos
 *            apellidos: Gonzalez Castro
 *            direccion: Cll 56
 *            telefono: 32456754344
 *            correo: Farmatodo@gmail.com
 *            fkrol: Estudiante
 *            password: 19876567897
 *            asistencia: Asistió
 *            createdAt: 2024/04/04
 */

/**
 * @swagger
 * /api/personas:
 *  post:
 *    summary: Crear un nuevo usuario
 *    tags: [personas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/personas'
 *    responses:
 *      200:  
 *        description: Nuevo usuario creado!
 * 
 */
router.post('/personas', async (req, res) => {
    try {
        const nuevopersonas = await personaSchema.create(req.body);
        res.status(201).json({ message: 'Se agregó la información del Usuario', data: nuevopersonas });
    } catch (error) {
        console.error('Error al crear el Usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});
//BUSCAR GENERAL
/**
 * @swagger
 * /api/personas:
 *  get:
 *    summary: Traeme todos los usuarios
 *    tags: [personas]
 *    responses:
 *      200:  
 *        description: Todos los usuarios!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *            items:
 *              $ref: '#/components/schemas/personas'
 * 
 */
// Buscar todos los personass
router.get('/personas', (req, res) => {
    personaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error, query: 'selectAll' }));
});
/**
 * @swagger
 * /api/personas/{id}:
 *  get:
 *    summary: Traeme un usuario
 *    tags: [personas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del usuario
 *    responses:
 *      200:  
 *        description: un usuario!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/personas'
 *      404:
 *        description: usuario no identificado
 */
// Buscar personas por ID
router.get('/personas/:id', (req, res) => {
    const { id } = req.params;
    personaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error, query: 'selectOne' }));
});
//Actualizar
/**
 * @swagger
 * /api/personas/{id}:
 *  put:
 *    summary: Actualizar un usuario
 *    tags: [personas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/personas'
 *    responses:
 *      200:  
 *        description: usuario actualizado!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/personas'
 *      404:
 *        description: Usuario no identificado
 */
// Actualizar personas por ID
router.put('/personas/:id', (req, res) => {
    const { id } = req.params;
    const { tdocpersonas, ndocpersonas, nombres, apellidos, correo, password, fkrol, asistencia, createdAt } = req.body;
    personaSchema
        .updateOne({ _id: id }, { $set: { tdocpersonas, ndocpersonas, nombres, apellidos, correo, password, fkrol, asistencia, createdAt } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error, query: 'updateOne' }));
});
//DELETE
/**
 * @swagger
 * /api/personas/{id}:
 *  delete:
 *    summary: Eliminar un usuario
 *    tags: [personas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del usuario
 *    responses:
 *      200:  
 *        description: Usuario eliminado
 *      404:
 *        description: Usuario no identificado
 */

// Eliminar personas por ID
router.delete('/personas/:id', (req, res) => {
    const { id } = req.params;
    personaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error, query: 'deleteOne' }));
});

module.exports = router;
