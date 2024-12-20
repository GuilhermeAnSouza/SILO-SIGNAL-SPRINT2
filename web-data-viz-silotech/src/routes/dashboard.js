var express = require('express');
var router = express.Router();

var dashboardController = require('../controllers/dashboardController.js');

// Rota para buscar as últimas medidas do silo
router.get('/buscarMedidas6horas/:siloId', function (req, res) {
  dashboardController.buscarMedidas6horas(req, res);
});

router.get('/buscarMedidasMeiaHora/:siloId', function (req, res) {
  dashboardController.buscarMedidasMeiaHora(req, res);
});

router.get('/buscarDadosSiloSemana/:siloId', function (req, res) {
  dashboardController.buscarDadosSiloSemana(req, res);
});

router.get('/buscarDadosSiloSemestral/:siloId', function (req, res) {
  dashboardController.buscarDadosSiloSemestral(req, res);
});

// kpi
router.get("/kpis_silo1/:idEmpresa/:idSilo", function (req, res) {
  dashboardController.kpis_silo1(req, res);
});

router.get("/kpis_silo2/:idEmpresa/:idSilo", function (req, res) {
  dashboardController.kpis_silo2(req, res);
});

module.exports = router;