const mongoose = require("mongoose");

const tdSchema = mongoose.Schema({

    tdoc:{
        type:String,
        required:true,
    },

    desc_tdoc:{
        type: String,
        required:true,
    },
    
    tdoc_estado: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('tipodocumento', tdSchema);