'use strict'
const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI,{ useNewUrlParser:true, useUnifiedTopology: true })
        .then(() => {
            console.log('Conexión a la base de datos establecida con exito');
            app.listen(PORT, ()=>{
                console.log("Servidor corriendo correctamente en la url: http://localhost:"+PORT);
            });
        })
        .catch(err => console.log(err));