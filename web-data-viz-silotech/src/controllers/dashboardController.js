var dashboardModel = require("../models/dashboardModel");

function buscarMedidas6horas(req, res) {
  let siloId = req.params.siloId;

  if (!siloId || isNaN(siloId)) {
    return res.status(400).json({ error: 'ID do silo inválido' });
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

function kpis_silo1(req, res) {
  var idEmpresa = req.params.idEmpresa
  var idSilo = req.params.idSilo
  dashboardModel.kpis_silo1(idEmpresa, idSilo).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    console.log("Houve um erro ao buscar as kpis: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function kpis_silo2(req, res) {
  var idEmpresa = req.params.idEmpresa
  var idSilo = req.params.idSilo
  dashboardModel.kpis_silo2(idEmpresa, idSilo).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as kpis: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });

}

module.exports = {
  buscarMedidas6horas,
  buscarMedidasMeiaHora,
  buscarDadosSiloSemana,
  buscarDadosSiloSemestral,
  kpis_silo1,
  kpis_silo2
};