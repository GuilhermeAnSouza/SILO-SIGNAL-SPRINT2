var database = require("../database/config");

function buscarMedidasMeiaHora(siloId) {
  var instrucaoSql = `
    SELECT CAST(sensor.dataHora AS CHAR) AS dataHora,
    sensor.porcentagemDetec AS porcentagem
    FROM silo JOIN sensor 
    ON sensor.fk_silo = silo.idSilo
    WHERE fk_silo = ${siloId}
    ORDER BY sensor.dataHora DESC LIMIT 50;
  `;

  console.log("Executando SQL: ", instrucaoSql); 

  return database.executar(instrucaoSql)
    .catch((erro) => {
      console.error("Erro ao executar a consulta SQL: ", erro.sqlMessage);
      throw erro; 
    });

}

function buscarDadosSiloSemana(siloId) {
  var instrucaoSql = `
    SELECT DATE_FORMAT(dataHora, '%Y-%m-%d') AS dataDia,
    MAX(porcentagemDetec) AS porcentagemMax
    FROM sensor WHERE dataHora >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
    AND fk_silo = ${siloId}
    GROUP BY DATE_FORMAT(dataHora, '%Y-%m-%d')
    ORDER BY dataDia DESC LIMIT 7;
  `;

  console.log("Executando SQL: ", instrucaoSql); 

  return database.executar(instrucaoSql)
    .catch((erro) => {
      console.error("Erro ao executar a consulta SQL: ", erro.sqlMessage);
      throw erro; 
    });

}

function buscarDadosSiloSemestral(siloId) {
  var instrucaoSql = `
      SELECT DATE_FORMAT(dataHora, '%Y-%m') AS Mês,
      MAX(porcentagemDetec) AS PorcentagemMaxima
      FROM sensor 
      WHERE fk_silo = ${siloId}
      AND dataHora >= DATE_ADD(NOW(), INTERVAL -6 MONTH)
      GROUP BY DATE_FORMAT(dataHora, '%Y-%m')
      ORDER BY Mês DESC LIMIT 6;
  `;

  console.log("Executando SQL: ", instrucaoSql); 

  return database.executar(instrucaoSql)
    .catch((erro) => {
      console.error("Erro ao executar a consulta SQL: ", erro.sqlMessage);
      throw erro; 
    });

}

module.exports = {
  buscarMedidasMeiaHora,
  buscarDadosSiloSemana,
  buscarDadosSiloSemestral
};