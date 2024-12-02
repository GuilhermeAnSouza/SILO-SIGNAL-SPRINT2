var dashboardModel = require("../models/dashboardModel");

function buscarMedidas6horas(req,res){
  let siloId = req.params.siloId;

  if(!siloId || isNaN(siloId)){
    return res.status(400).json({ error: 'ID do silo inválido'});
  }
  
  dashboardModel.buscarMedidas6horas(siloId)
  .then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]); // Nenhum dado encontrado
    }
  })
  .catch((erro) => {
    console.error("Erro ao buscar as últimas % do silo:", erro);
    res.status(500).json({ error: "Erro interno no servidor.", detalhes: erro.message });
  });
}


function buscarMedidasMeiaHora(req, res) {
  let siloId = req.params.siloId;

  if (!siloId || isNaN(siloId)) {
    return res.status(400).json({ error: "ID do silo inválido." });
  }

  console.log(`Buscando dados para o silo com ID: ${siloId}`);

  dashboardModel.buscarMedidasMeiaHora(siloId)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]); // Nenhum dado encontrado
      }
    })
    .catch((erro) => {
      console.error("Erro ao buscar as últimas % do silo:", erro);
      res.status(500).json({ error: "Erro interno no servidor.", detalhes: erro.message });
    });
}


function buscarDadosSiloSemana(req, res) {
  let siloId = req.params.siloId;

  // Validação do siloId
  if (!siloId || isNaN(siloId)) {
    return res.status(400).json({ error: "ID do silo inválido." });
  }

  console.log(`Buscando dados para o silo com ID: ${siloId}`);

  dashboardModel.buscarDadosSiloSemana(siloId)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]); // Nenhum dado encontrado
      }
    })
    .catch((erro) => {
      console.error("Erro ao buscar as últimas % do silo:", erro);
      res.status(500).json({ error: "Erro interno no servidor.", detalhes: erro.message });
    });
}

function buscarDadosSiloSemestral(req, res) {
  let siloId = req.params.siloId;

  if (!siloId || isNaN(siloId)) {
    return res.status(400).json({ error: "ID do silo inválido." });
  }

  console.log(`Buscando dados para o silo com ID: ${siloId}`);

  dashboardModel.buscarDadosSiloSemestral(siloId)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]); // Nenhum dado encontrado
      }
    })
    .catch((erro) => {
      console.error("Erro ao buscar as últimas % do silo:", erro);
      res.status(500).json({ error: "Erro interno no servidor.", detalhes: erro.message });
    });
}

module.exports = {
  buscarMedidas6horas,
  buscarMedidasMeiaHora,
  buscarDadosSiloSemana,
  buscarDadosSiloSemestral
};