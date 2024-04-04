const permisoSchema= require ('../models/permisos');
const dotenv = require("dotenv");
const express = require("express");
const routers = require('./rolees');
const { Router }= express;
dotenv.config();
const router = Router();

router.post('/permisos',async (req,res)=>{
    try{
        const {ndoc,idrol,estado} = req.body;
        const permiso = new permisoSchema({
            ndoc: ndoc,
            idrol: idrol,
            estado: estado
        });

        const result = await permiso.save();
     res.status(200).json({message:"Registro Exitoso"});
    } catch (error) {
      console.error('Error al registar:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports =router;














//BUSCAR GENERAL
/*router.get('/permisos', (req,res)=>{
    permisoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/permisos/:id',(req,res)=>{
    const {id} = req.params;
    permisoSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/permisos/:id',(req,res)=>{
    const {id} = req.params;
    const {ndoc,idrol,estado} = req.body;
    permisoSchema
    .updateOne({_id:id},{$set:{ndoc,idrol,estado}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/permisos/:id',(req,res)=>{
    const {id} = req.params;

    permisoSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});*/