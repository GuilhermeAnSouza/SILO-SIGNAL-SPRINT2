var database = require("../database/config");

function buscarMedidasMeiaHora(siloId) {
  var instrucaoSql = `
    SELECT DATE_FORMAT(dataHora, '%Y-%m-%d às %H:%i') AS dataHora,
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
    SELECT MAX(porcentagemDetec) AS porcentagem,
    DATE_FORMAT(DATE_ADD(dataHora, INTERVAL -WEEKDAY(dataHora) DAY), '%Y-%m-%d') AS inicioSemana,
    DATE_FORMAT(DATE_ADD(dataHora, INTERVAL (6 - WEEKDAY(dataHora)) DAY), '%Y-%m-%d') AS fimSemana
    FROM sensor WHERE fk_silo = ${siloId}
    AND dataHora >= DATE_ADD(NOW(), INTERVAL -2 MONTH)
    GROUP BY inicioSemana, fimSemana
    ORDER BY inicioSemana DESC LIMIT 7;
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
      SELECT DATE_FORMAT(dataHora, '%Y-%m') AS dataHora,
      MAX(porcentagemDetec) AS porcentagem
      FROM sensor 
      WHERE fk_silo = ${siloId}
      AND dataHora >= DATE_ADD(NOW(), INTERVAL -6 MONTH)
      GROUP BY DATE_FORMAT(dataHora, '%Y-%m')
      ORDER BY dataHora DESC LIMIT 6;
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