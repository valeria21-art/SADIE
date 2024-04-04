const semestreSchema= require ('../models/semestre');
const dotenv = require("dotenv");
const express = require("express");
const routers = require('./rolees');
const { Router }= express;
dotenv.config();
const router = Router();

router.post('/semestre',async (req,res)=>{
    try{
        const {idsemestre, semestreformacion} = req.body;    semestreSchema
        const semestre = new semestreSchema({
            idsemestre: idsemestre,
            semestreformacion: semestreformacion
        });

        const result = await semestre.save();
     res.status(200).json({message:"Registro Exitoso"});
    } catch (error) {
      console.error('Error al registar:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports =router;












/*//BUSCAR GENERAL
router.get('/semestre', (req,res)=>{
    semestreSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/semestre/:id',(req,res)=>{
    const {id} = req.params;
    semestreSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/semestre/:id',(req,res)=>{
    const {id} = req.params;
    const {idsemestre, semestreformacion} = req.body;    semestreSchema
    .updateOne({_id:id},{$set:{idsemestre, semestreformacion}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/semestre/:id',(req,res)=>{
    const {id} = req.params;

    semestreSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});*/