var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorCodigoTecnico(req, res) {
  empresaModel.buscarCodigoTecnico(codigoTecnico).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var razaoSocial = req.body.razaoSocialServer;
  var cnpj = req.body.cnpjServer;
  var telEmp = req.body.telEmpServer;
  var emailEmp = req.body.emailEmpServer;
  var codigoAtivacao = req.body.codigoAtivacaoServer;
  var codigoTecnico = req.body.codigoTecnicoServer

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(razaoSocial, cnpj, telEmp, emailEmp, codigoAtivacao, codigoTecnico).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}


module.exports = {
  buscarPorCnpj,
  buscarPorId,
  buscarPorCodigoTecnico,
  cadastrar,
  listar,
};
