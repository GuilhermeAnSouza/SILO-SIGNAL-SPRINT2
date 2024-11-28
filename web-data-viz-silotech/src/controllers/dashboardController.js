var dashboardModel = require("../models/dashboardModel")

// function buscarSiloSensoresEmpresa(){
 
// var idEmpresa = req.params.idEmpresa

//  dashboardModel.buscarSiloSensoresEmpresa(idEmpresa).then((resultado) => {
//     if (resultado.length > 0) {
//       res.status(200).json(resultado);
//     } else {
//       res.status(204).json([]);
//     }
//   }).catch(function (erro) {
//     console.log(erro);
//     console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
//     res.status(500).json(erro.sqlMessage);
//   });
// }

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
    // buscarSiloSensoresEmpresa,
    kpis_silo1,
    kpis_silo2
}