const mongoose = require("mongoose");

const permisoSchema = mongoose.Schema({
    
    ndoc:String,

    idrol:String,
    estado:String,
});

const permisos = mongoose.model('permisos', permisoSchema);

module.exports = permisos;
