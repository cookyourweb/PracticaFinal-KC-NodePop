'use strict';

// Cargamos mongoose
const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    nombre: {
        type: String,
        index: true
    },
    venta: {
        type: Boolean,
        index: true
    },
    precio: {
        type: Number,
        index:true
    },
    foto: String,
    tags: {
        type: [String],
        index: true
    }
});

// Método estático
anuncioSchema.statics.list = function(filter, start, limit, callback) {
    const query = Anuncio.find(filter);
    query.skip(start);
    query.limit(limit);
    query.exec(callback);
}

// Creamos el modelo anuncio
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;