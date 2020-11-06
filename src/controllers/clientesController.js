const clientes = require("../models/clientes")

const getAll = (req, res) => {
  console.log("getAll")
  clientes.find(function (err, clientes) {
    if (err) res.status(500).send(err.message)
    res.status(200).send(clientes)
  })
}

const getCompradores = (req, res) => {
  console.log("getCompradores");
  clientes.find({ comprou: true }, { nome: 1, email: 1, _id: 0 }, function (err, clientes) {
    if (err) res.status(500).send(err.message)
    res.status(200).send(clientes)
  })
}

const getByCpf = (req, res) => {
  const cpf = req.params.cpf
  clientes.find({ cpf }, function (err, clientes) {
    if (err) { 
      res.status(500).send({ message: err.message })
    }
    else {
      res.status(200).send(clientes)
    }
  }) 
}

const postCliente = (req, res) => {
  console.log(req.body);
  let client = new clientes(req.body);
  client.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(201).send({
      status: true,
      mensagem: "aluna incluida com sucesso"
    })
  })
}

const deleteCliente = (req, res) => {
  const nome = req.params.nome
  clientes.deleteOne({ nome }, function(err){
    if(err){
    res.status(500).send({ message: err.menssage })
    }
    res.status(200).send({ message: `Registro de ${nome} removido com sucesso!`})
  })
}

module.exports = {
  getAll,
  getCompradores,
  getByCpf,
  postCliente,
  deleteCliente
}
