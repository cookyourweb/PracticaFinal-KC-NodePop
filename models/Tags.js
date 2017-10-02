"use strict";

const mongoose = require('mongoose');

//Definimos Schema
const tagsSchema = mongoose.Schema({
  nombre: String,
},{
  collection:'tags'
});

// Método estático
tagsSchema.statics.lista = function( filter, skip, limit, callback) {
  const query = Tags.find(filter);
  query.skip(skip);
  query.limit(limit);

  return query.exec(callback); // ejecutamos la consulta
};


// Modelo Tags
const Tags = mongoose.model('Tags', tagsSchema);


module.exports = Tags;
