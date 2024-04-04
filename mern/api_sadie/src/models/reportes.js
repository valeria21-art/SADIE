const mongoose = require("mongoose");

const reporteSchema = mongoose.Schema({

    fecha: String,
    asistencia:String,
    inasistencia:String,
    desertados:String,
    materia:String,
    ndocdocente:String,  
    ndocestudiante:String,
});

const reportes = mongoose.model('reportes', reporteSchema);
module.exports = reportes;
