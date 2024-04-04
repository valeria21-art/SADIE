const express = require('express');
const seguridadSchema=require('../models/seguridad');

const router = express.Router();

router.post('/seguridad',(req,res)=>{
    //res.send("Ruta para crear usuario");

    const segDev = seguridadSchema(req.body);
    segDev.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

module.exports =router;
//BUSCAR GENERAL
router.get('/seguridad', (req,res)=>{
    seguridadSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/seguridad/:id',(req,res)=>{
    const {id} = req.params;
    seguridadSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/seguridad/:id',(req,res)=>{
    const {id} = req.params;
    const {n_pregunta,pregunta_seg,estado_pregunta} = req.body;
    seguridadSchema
    .updateOne({_id:id},{$set:{n_pregunta,pregunta_seg,estado_pregunta}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/seguridad/:id',(req,res)=>{
    const {id} = req.params;
    seguridadSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});