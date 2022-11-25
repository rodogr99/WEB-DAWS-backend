const { Schema, model } = require('mongoose');

const schema = new Schema({
    nombre:{
        type: String
    },
    sexo:{
        type: String
    },
    correo:{
        type: String
    },
    usuario:{
        type: String
    },
    status:{
        type:Number,
        default:1
    }
});

module.exports = model('usuarios',schema);