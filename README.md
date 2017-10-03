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
