const express = require('express');
const reporteSchema=require('../models/reportes');

const router = express.Router();

//crear proveedor 
/**
 * @swagger
 *  components:
 *    schemas:
 *      reportes:
 *        type: object
 *        properties:
 *          fecha: asistencia  inasistencia
 desertados, materia, ndocdocente, ndocestudianteescription: codigo proveedor 
 *          Nomb_proveedor:
 *            type: string
 *            description: Nombre del proveedor
 *          Tel_proveedor:
 *            type: string
 *            description: telefeno del proveedor
 *          Email_proveedor:
 *            type: string
 *            description: email del proveedor
 *        required:
 *            - fecha
 asistencia- inasistenciao desertados, materia, ndocdocente, ndocestudiante - Tel_proveedor
 *            - Email_proveedor
 *        example:
 *            fecha: asistencia  inasistenciae desertados, materia, ndocdocente, ndocestudiante
 *            Tel_proveedor: 6017469000
 *            Email_proveedor: Farmatodo@gmail.com
 */

/**
 * @swagger
 * /api/reportes:
 *  post:
 *    summary: crear un nuevo proveedor
 *    tags: [reportes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/reportes'
 *    responses:
 *      200:  
 *        description: nuevo proveedor creado!
 * 
 */
router.post('/reportes', async (req, res) => {
    try {
      const nuevoreporte = await reporteSchema.create(req.body);
      res.status(201).json({ message: 'Se agregó la infromacion del reporte', data: nuevoreporte });
    } catch (error) {
      console.error('Error al crear la infromacion del carro:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });

module.exports =router;
//BUSCAR GENERAL
/**
 * @swagger
 * /api/reportes:
 *  get:
 *    summary: traeme todos los proveedor
 *    tags: [reportes]
 *    responses:
 *      200:  
 *        description: todos los reportes!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *            items:
 *              $ref: '#/components/schemas/reportes'
 * 
 */
router.get('/reportes', (req,res)=>{
    reporteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
/**
 * @swagger
 * /api/reportes/{id}:
 *  get:
 *    summary: traeme un proveedor
 *    tags: [reportes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del proveedor
 *    responses:
 *      200:  
 *        description: un proveedor!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/reportes'
 *      404:
 *        description: usuario no identidicado
 */
router.get('/reportes/:id',(req,res)=>{
    const {id} = req.params;
    reporteSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
/**
 * @swagger
 * /api/reportes/{id}:
 *  put:
 *    summary: actualizar un proveedor
 *    tags: [reportes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del proveedor
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/reportes'
 *    responses:
 *      200:  
 *        description: proveedor actualizado!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/reportes'
 *      404:
 *        description: usuario no identidicado
 */
router.put('/reportes/:id',(req,res)=>{
    const {id} = req.params;
    const {fecha, asistencia, inasistencia, desertados, materia, ndocdocente, ndocestudiante} = req.body;
    reporteSchema
    .updateOne({_id:id},{$set:{fecha, asistencia, inasistencia, desertados, materia, ndocdocente, ndocestudiante}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE
/**
 * @swagger
 * /api/reportes/{id}:
 *  delete:
 *    summary: Eliminar un proveedor
 *    tags: [reportes]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del proveedor
 *    responses:
 *      200:  
 *        description: proveedor eliminado
 *      404:
 *        description: usuario no identidicado
 */
router.delete('/reportes/:id',(req,res)=>{
    const {id} = req.params;
    reporteSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});