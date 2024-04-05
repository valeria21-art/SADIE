const express = require('express');
const reporteSchema=require('../models/reportes');

const router = express.Router();

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

router.get('/reportes/:id',(req,res)=>{
    const {id} = req.params;
    reporteSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"selectOne"}));
});


router.put('/reportes/:id',(req,res)=>{
    const {id} = req.params;
    const {fecha, asistencia, inasistencia, desertados, materia, ndocdocente, ndocestudiante} = req.body;
    reporteSchema
    .updateOne({_id:id},{$set:{fecha, asistencia, inasistencia, desertados, materia, ndocdocente, ndocestudiante}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"updateOne"}));
});


router.delete('/reportes/:id',(req,res)=>{
    const {id} = req.params;
    reporteSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error, query:"deleteOne"}));
});
