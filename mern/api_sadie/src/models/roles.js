const mongoose = require("mongoose");

const rolSchema = mongoose.Schema({
    idroles:String,

    rol:String,
});

const roles = mongoose.model('roles', rolSchema);
module.exports = roles;
