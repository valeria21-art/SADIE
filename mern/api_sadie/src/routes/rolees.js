const rolSchema= require ('../models/roles');
const dotenv = require("dotenv");
const express = require("express");
const routers = require('./rolees');
const { Router }= express;
dotenv.config();
const router = Router();

router.post('/rol',async (req,res)=>{
    try{
        const {idroles,rol} = req.body;
        const rols = new rolSchema({
            idroles: idroles,
            rol: rol
        });

        const result = await rols.save();
     res.status(200).json({message:"Registro Exitoso"});
    } catch (error) {
      console.error('Error al registar:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports =router;












//BUSCAR GENERAL
/*router.get('/roles', (req,res)=>{
    rolSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/roles/:id',(req,res)=>{
    const {id} = req.params;
    rolSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/roles/:id',(req,res)=>{
    const {id} = req.params;
    const {idroles,rol} = req.body;
    rolSchema
    .updateOne({_id:id},{$set:{idroles,rol}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/roles/:id',(req,res)=>{
    const {id} = req.params;

    rolSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});*/