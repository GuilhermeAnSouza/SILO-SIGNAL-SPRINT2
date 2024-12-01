var database = require("../database/config");

function buscarMedidasMeiaHora(siloId) {

  // Ajuste na consulta SQL para usar parâmetros preparados
  var instrucaoSql = `
    SELECT CAST(sensor.dataHora AS CHAR) AS dataHora,
    sensor.porcentagemDetec AS porcentagem
    FROM silo JOIN sensor 
    ON sensor.fk_silo = silo.idSilo
    WHERE fk_silo = ${siloId}
    ORDER BY sensor.dataHora DESC LIMIT 50;
  `;

  console.log("Executando SQL: ", instrucaoSql); // Log da consulta SQL

  // Usando parâmetros preparados para evitar injeção de SQL
  return database.executar(instrucaoSql)
    .catch((erro) => {
      console.error("Erro ao executar a consulta SQL: ", erro.sqlMessage);
      throw erro; // Lança o erro para ser tratado em um nível superior
    });

}

module.exports = {
  buscarMedidasMeiaHora
};