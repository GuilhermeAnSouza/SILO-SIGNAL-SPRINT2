var dashboardModel = require("../models/dashboardModel");

function buscarMedidasMeiaHora(req, res) {
  var siloId = req.params.siloId;

  // Validação do siloId
  if (!siloId || isNaN(siloId)) {
    return res.status(400).json({ error: "ID do silo inválido." }); // Retorna erro 400 se o ID for inválido
  }

  console.log(`Buscando dados para o silo com ID: ${siloId}`);

  dashboardModel.buscarMedidasMeiaHora(siloId)
      .then((resultado) => {
          if (resultado.length > 0) {
              res.status(200).json(resultado); // Retorna os dados se encontrados
          } else {
              res.status(204).json([]); // Nenhum dado encontrado
          }
      })
      .catch((erro) => {
          console.error("Erro ao buscar as últimas medidas do silo:", erro);
          res.status(500).json({ error: "Erro interno no servidor.", detalhes: erro.message }); // Retorna o erro detalhado
      });
}

module.exports = {
  buscarMedidasMeiaHora
};