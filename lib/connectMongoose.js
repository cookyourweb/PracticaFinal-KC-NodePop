"use strict";

const mongoose = require('mongoose');

const conn = mongoose.connection;

conn.on('error', err => {
  console.log('Error de conexión', err);
  process.exit(1);
});

conn.once('open', () => {
  console.log('Conectado a MongoDB.');
});

// Url parecida a Http pero para mongo
mongoose.connect('mongodb://localhost/nodepop');


