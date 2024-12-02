var express = require('express');
var router = express.Router();

var dashboardController = require('../controllers/dashboardController.js');

// Rota para buscar as últimas medidas do silo
router.get('/buscarMedidasMeiaHora/:siloId', function (req, res) {
    dashboardController.buscarMedidasMeiaHora(req, res);
});

router.get('/buscarDadosSiloSemana/:siloId', function (req, res) {
  dashboardController.buscarDadosSiloSemana(req, res);
});

router.get('/buscarDadosSiloSemestral/:siloId', function (req, res) {
  dashboardController.buscarDadosSiloSemestral(req, res);
});

module.exports = router;