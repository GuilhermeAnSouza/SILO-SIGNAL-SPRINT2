var database = require("../database/config");


function buscarSiloSensoresEmpresa(empresaId) {

  var instrucaoSql = `
    SELECT * FROM silo JOIN sensor ON fk_silo = idSilo where fk_empresa = ${empresaId}
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



module.exports = {
    buscarSiloSensoresEmpresa
}