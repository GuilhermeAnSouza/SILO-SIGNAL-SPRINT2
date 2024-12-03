var database = require("../database/config");

function buscarMedidas6horas(siloId) {
  var instrucaoSql = `
    SELECT DATE_FORMAT(dataHora, '%m-%d %H:00:00') AS dataHora, 
    MAX(porcentagemDetec) AS porcentagem
    FROM sensor WHERE fk_silo = ${siloId}
    AND dataHora >= DATE_ADD(NOW(), INTERVAL -6 HOUR) 
    GROUP BY DATE_FORMAT(dataHora, '%m-%d %H:00:00');
  `;

  console.log(`Exececutando SQL: `, instrucaoSql);
  return database.executar(instrucaoSql)
    .catch((erro) => {
      console.error("Error ao executar a consulta SQL: ", erro.sqlMessage);
      throw erro;
    });
}

function buscarMedidasMeiaHora(siloId) {
  var instrucaoSql = `
    SELECT DATE_FORMAT(dataHora, '%m-%d às %H:%i') AS dataHora,
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
    DATE_FORMAT(DATE_ADD(dataHora, INTERVAL -WEEKDAY(dataHora) DAY), '%Y-%m-%d') AS dataHora,
    DATE_FORMAT(DATE_ADD(dataHora, INTERVAL (6 - WEEKDAY(dataHora)) DAY), '%Y-%m-%d') AS dataHora
    FROM sensor WHERE fk_silo = ${siloId}
    AND dataHora >= DATE_ADD(NOW(), INTERVAL -2 MONTH)
    GROUP BY dataHora, dataHora
    ORDER BY dataHora DESC LIMIT 7;
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

function kpis_silo1(idEmpresa, idSilo) {

  var instrucaoSql = `
    SELECT sensor.porcentagemDetec FROM silo JOIN sensor ON fk_silo = idSilo where fk_empresa = ${idEmpresa} AND fk_silo = ${idSilo} LIMIT 1;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function kpis_silo2(idEmpresa, idSilo) {
  var instrucaoSql = `
  SELECT sensor.porcentagemDetec FROM silo JOIN sensor ON fk_silo = idSilo where fk_empresa = ${idEmpresa} AND fk_silo = ${idSilo} LIMIT 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarMedidas6horas,
  buscarMedidasMeiaHora,
  buscarDadosSiloSemana,
  buscarDadosSiloSemestral,
  kpis_silo1,
  kpis_silo2
};