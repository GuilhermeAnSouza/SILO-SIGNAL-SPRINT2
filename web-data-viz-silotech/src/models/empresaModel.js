var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function buscarPorIdEmpresa(idEmpresa) {
  var instrucaoSql = `SELECT codigoAtivacao FROM empresa WHERE idEmpresa = '${idEmpresa}'`;

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

function cadastrar(razaoSocial, cnpj, telEmp, emailEmp, codigoAtivacao) {
  var instrucaoSql = `INSERT INTO empresa (razaoSocial, cnpj, telEmp, emailEmp, codigoAtivacao) VALUES ('${razaoSocial}', '${cnpj}', '${telEmp}', '${emailEmp}', '${codigoAtivacao}')`;

  return database.executar(instrucaoSql);
}

function buscarPorCodigoAtivacao(codigoAtivacao){
  var instrucaoSql = `SELECT * FROM empresa WHERE codigoAtivacao = '${codigoAtivacao}';`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar, buscarPorCodigoAtivacao, buscarPorIdEmpresa };
