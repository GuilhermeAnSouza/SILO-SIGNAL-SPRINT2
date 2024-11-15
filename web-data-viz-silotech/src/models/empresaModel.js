var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idEmpresa, razaoSocial, cnpj, codigoAtivacao FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj, telEmp, emailEmp, codigoAtivacao, codigoTecnico ) {
  var instrucaoSql = `INSERT INTO empresa (razaoSocial, cnpj, telEmp, emailEmp, codigoAtivacao, codigoTecnico) VALUES ('${razaoSocial}', '${cnpj}', '${telEmp}', '${emailEmp}', '${codigoAtivacao}', '${codigoTecnico}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
