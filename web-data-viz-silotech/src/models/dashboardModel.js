var database = require("../database/config");


function buscarSiloSensoresEmpresa(empresaId) {

  var instrucaoSql = `
    SELECT * FROM silo JOIN sensor ON fk_silo = idSilo where fk_empresa = ${empresaId}
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function kpis_silo1(idEmpresa, idSilo) {

  var instrucaoSql = `
  SELECT sensor.porcentagemDetec FROM silo JOIN sensor ON fk_silo = idSilo where fk_empresa = ${idEmpresa} AND fk_silo = ${idSilo};
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function kpis_silo2(idEmpresa, idSilo) {

  var instrucaoSql = `
  SELECT sensor.porcentagemDetec FROM silo JOIN sensor ON fk_silo = idSilo where fk_empresa = ${idEmpresa} AND fk_silo = ${idSilo};
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
    buscarSiloSensoresEmpresa,
    kpis_silo1,
    kpis_silo2
}