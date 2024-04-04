const express = require('express');
const materiaSchema=require('../models/materias');

const router = express.Router();

router.post('/materias',(req,res)=>{
    //res.send("Ruta para crear usuario");

    const materiaDev = materiaSchema(req.body);
    materiaDev.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

module.exports =router;
//BUSCAR GENERAL
router.get('/materias', (req,res)=>{
    materiaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/materias/:id',(req,res)=>{
    const {id} = req.params;
    materiaSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/materias/:id',(req,res)=>{
    const {id} = req.params;
    const {idmaterias,materias} = req.body;
    materiaSchema
    .updateOne({_id:id},{$set:{idmaterias,materias}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/materias/:id',(req,res)=>{
    const {id} = req.params;
    materiaSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});











//BUSCAR GENERAL
/*router.get('/materias', (req,res)=>{
    materiaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/materias/:id',(req,res)=>{
    const {id} = req.params;
    materiaSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/materias/:id',(req,res)=>{
    const {id} = req.params;
    const {idmaterias,materias} = req.body;
    materiaSchema
    .updateOne({_id:id},{$set:{idmaterias,materias}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/materias/:id',(req,res)=>{
    const {id} = req.params;
    materiaSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});*/