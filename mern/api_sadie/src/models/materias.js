const mongoose = require("mongoose");

const reporteSchema = mongoose.Schema({

    idmaterias:{
        type:String,
        require:true 
    },
    materias: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('materias', reporteSchema);
