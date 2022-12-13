const {Schema, model} = require('mongoose');

const contactosSchema = new Schema({
    telefono:{type: String},
    nombre:{type: String},
    correo:{type: String},
    status:{type: String, default: "1"}
});

module.exports = model('contactos', contactosSchema);