const mongoose = require("mongoose");

const semestreSchema = mongoose.Schema({
    idsemestre:String,

    semestreformacion:String,

});

const semestre = mongoose.model('semestre', semestreSchema);
module.exports = semestre;
