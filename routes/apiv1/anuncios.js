'use strict';

const express = require('express');
const router = express.Router();

// Cargamos el modelo Anuncio
const Anuncio = require('../../models/Anuncio');


// GET
router.get('/', (req, res, next) => {

  
    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const precio = req.query.precio;
    const tags = req.query.tags;
    const start = parseInt(req.query.start);
    const limit = parseInt(req.query.limit);

    // Objeto vacío por si no nos pasan ningún filtro
    const filter = {};

    // Miramos si nos han pasado un filtro
    if(tags) {
        filter.tags = tags;
    }
    if(nombre) {
        filter.nombre = new RegExp('^' + nombre, "i");
    }
    if(venta) {
        filter.venta = venta;
    }
    if(precio) {
        switch (precio) {
            case "10-50":
                filter.precio = {'$gte':10, '$lte':50};
                break;
            case "10-":
                filter.precio = {'$gte':10};
                break;
            case "-50":
                filter.precio = {'$lte':50};
                break;
            case "50":
                filter.precio = 50;
                break;
            default:
                filter.precio = precio;
        }
        
    }




    // Recuperar una lista de anuncios
    Anuncio.list(filter, start, limit, (err, lista) => {
        if (err) {
            console.log('Error'. err);
            next(err); // Para que retorne la página de error
            return;
        }

        res.render('index', { 
            title: 'Nodepop',
            lista: lista
        });
  
    });
});









// POST /
// Crear un anuncio
router.post('/', (req, res, next) => {
    console.log(req.body);
    
    //Creamos un nuevo anuncio
    const anuncio = new Anuncio(req.body);

    // Lo guardamos en la base de datos
    anuncio.save((err, anuncioGuardado) => {
        if (err) {
            console.log('Error'. err);
            next(err);
            return;
        }
        res.json({ success:true, result: anuncioGuardado});
    });
});

module.exports = router; // Para poder cargarlo en app.js

