const mongoose = require("mongoose");

const seguridadSchema = mongoose.Schema({
    n_pregunta: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    pregunta_seg: {
        type: String,
        required: true
    },
    estado_pregunta: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('preguntaseguridad', seguridadSchema);
