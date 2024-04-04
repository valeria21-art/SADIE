const express = require('express');
const tdSchema = require('../models/tipodocumento');

const router = express.Router();

router.post('/tipodocumento', async (req, res) => {
    // res.send("Ruta para crear usuario");

    try {
        const nuevotd = await tdSchema.create(req.body);
        res.status(201).json({ message: 'se agrego la infromacion del taqueo', data: nuevotd });
      } catch (error) {
        console.error('Error al crear la infromacion del carro:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    });

module.exports =router;
//BUSCAR GENERAL
router.get('/tipodocumento', (req,res)=>{
    tdSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message:error, query:"selectAll"}));
});

//BUSCAR ESPECIFICO
router.get('/tipodocumento/:id',(req,res)=>{
    const {id} = req.params;
    tdSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});

//Actualizar
router.put('/tipodocumento/:id',(req,res)=>{
    const {id} = req.params;
    const {tdoc,desc_tdoc,tdoc_estado} = req.body;
    tdSchema
    .updateOne({_id:id},{$set:{tdoc,desc_tdoc,tdoc_estado}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});

//DELETE

router.delete('/tipodocumento/:id',(req,res)=>{
    const {id} = req.params;
    tdSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});