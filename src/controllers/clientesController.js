const clientes = require("../models/clientes");

const getAll = (req, res) => {
    console.log("getAll");
    clientes.find(function(err, clientes){
      if(err) res.status(500).send(err.message)
      res.status(200).send(clientes);
    })
}

const getCompradores = (req, res) => {
    console.log("getCompradores")
    clientes.find({comprou: true}, {nome: 1, email: 1, _id: 0},
    function(err, clientes) {
      if (err) res.status(500).send(err.message)
      res.status(200).send(clientes)
    })
}

const getByCpf = (req, res) => {
    console.log("getByCpf")
    const cpf = req.params.cpf
    clientes.find({ cpf }, function (err, sucess) {
      if (err) res.status(500).send(err)
      else{
          res.status(200).send(sucess)
      }
  })
}

const postCliente = (req, res) => {
    console.log(req.body)
    let client = new clientes(req.body)
    client.save(function(err){
      if (err) {
          res.status(500).send({ message: err.message })
      }
      res.status(201).send(client.toJSON())
  })
}

module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
