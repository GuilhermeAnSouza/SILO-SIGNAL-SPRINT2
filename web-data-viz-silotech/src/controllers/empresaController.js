var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.body.cnpj;

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

// function buscarPorCodigoAtivacao(req, res) {
//   empresaModel.buscarPorCodigoAtivacao(codigoAtivacao).then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

function cadastrar(req, res) {
  var razaoSocial = req.body.razaoSocialServer;
  var cnpj = req.body.cnpjServer;
  var telEmp = req.body.telEmpServer;
  var emailEmp = req.body.emailEmpServer;
  var codigoAtivacao = req.body.codigoAtivacaoServer;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json(`a empresa com o cnpj ${cnpj} já existe.`);
    } else {
      empresaModel.buscarPorCodigoAtivacao(codigoAtivacao).then((resultado) => {
        if(resultado.length > 0){
          res.status(402).json(
            `A empresa com o codigo ${codigoAtivacao} já existe.`
          );
        }else{
          empresaModel.cadastrar(razaoSocial, cnpj, telEmp, emailEmp, codigoAtivacao).then((resultado) => {
            res.status(201).json(resultado);
          });
        }
      })
    }
  });

}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};