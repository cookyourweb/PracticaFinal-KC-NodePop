***
![Keepcoding](https://d2vvqscadf4c1f.cloudfront.net/078jf4zQNCjF2CsMPMmR_128x.png)

*Verónica Serna*  
<verserper@gmail.com>
***
## Resumen del ejercicio
Desarrollar el software que se ejecutará en el servidor dando servicio a una app (API) de venta de artículos de segunda mano, llamada Nodepop.
Se utiliza **Expres**, **Mongoose** y **Node**

## Requisitos para poder ejecutarlo en local
### 1. Tener instalados Node, Express Mongo y Mongodb 

### 2. Clonar el repositorio
Nos situamos en el directorio donde queremos intalar el repositorio con un terminal en modo adminstrador.

```
$ cd directorio
```
Clonamos el repo
```
$ git clone https://github.com/cookyourweb/PracticaFinal-KC-NodePop.git
```
Nos situamos dentro e instalamos las depencias indicadas en el package.json

```
$ cd PracticaFinal-KC-NodePop
```

```
$ npm install
```
### 3. Iniciar Mongodb y resetear la base de datos

  En caso de querer instalar la base de datos de este repositorio. Se  insertará anuncios a través de **anuncios.json** 

***Para Mac***

Ejecutar la siguiente intrucción desde el repositorio clonado.

bin/mongod --dbpath ./data/db --directoryperdb

*** Para Windows ***
 Situarse en el directorio donde se ha instalado el Mongo DB       
```
$ cd  C:\Program Files\MongoDB\Server\3.4\bin
```
Ejecutar la siguiente instrucción
```
$ mongod --dbpath c:\data\db --directoryperdb
```

Para arrancar el cliente Mongo:
    bin\mongo

Resetear la base de datos:
```
$ npm run installDB
```

### 3. Arrancamos la aplicación

```
$ npm start
```
# Peticiones a la base de datos

Listar todos los anuncios, sin filtros:
    http://localhost:3000/

Listar por tag:
    http://localhost:3000/apiv1/anuncios/?tags=lifestyle

Listar por nombre:
    http://localhost:3000/apiv1/anuncios/?nombre=bicicleta

Listar por Venta:
    http://localhost:3000/apiv1/anuncios/?venta=false

Listar por precio (3 rangos, menor de 10, entre 10 y 50, y mayor que 50)
    precio: 10-50
        http://localhost:3000/apiv1/anuncios/?precio=10-50
    
Listar por principio de nombre:
    http://localhost:3000/apiv1/anuncios/?nombre=ip

Consulta múltiple:
http://localhost:3000/apiv1/anuncios/?tags=lifestyle&venta=true&precio=50

Archivo estático
http://localhost:3000/images/bicicleta.png

# Para publicar un nuevo anuncio se utiliza Postam
Seleccionar Post>Body e insertar la dirección a los anuncios:
http://localhost:3000/apiv1/anuncios

En key y Value, ir añadiendo el anuncio: Ejemplo:

*** Postman ejemplo de inserción ***

```
nombre   insertado desde postamn
venta  false
precio 40
foto http://localhost:3000/images/iphone.png
tags mobile
Dar al botón Send

```

# Falta por implementar
1. La paginación en el index
2. El campo de búsqueda que funcione

3. Desplegar el anuncio al pinchar sobre él.