const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const personaSchema = mongoose.Schema({
        
    tdocpersonas: {
        type:ObjectId,
        ref: 'tipodocumento',
        require:true,
    },
    ndocpersonas: {
        type:String,
        require:true,
    },
    nombres: {
        type:String,
        require:true,
    }, 
    apellidos: {
        type:String,
        require:true,
    },
    direccion: {
        type:String,
        require:true,
    },
    telefono: {
        type:String,
        require:true,
    },
    correo: {
        type:String,
        require:true,
    },
    fkrol: {
        type:String,
        require:true,
    },
    password: {
        type:String,
        require:true,
    },
    asistencia: {
        type:String,
        require:true,
    },

    
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('personas', personaSchema);