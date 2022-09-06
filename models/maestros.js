'use stric'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MaestrosSchema = Schema({
    cedula: { type: String, require: true, unique: true},
    nombre: { type: String, require: true},
    edad: { type: Number, require: true},
    genero: { type: String, require: true},
});

module.exports = mongoose.model('Maestros', MaestrosSchema);