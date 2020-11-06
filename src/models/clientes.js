const mongoose = require('mongoose');

//esqueleto da nossa identidade
const clientesSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String },
    dataNascimento: { type: String },
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean }
},{
    versionKey: false,
});

const clientes = mongoose.model('clientes', clientesSchema); //criação de uma collection chamada clientes

module.exports = clientes 