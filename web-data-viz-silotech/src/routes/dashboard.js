var express = require('express');
var router = express.Router();

// Controller para lidar com as operações de dashboard
var dashboardController = require('../controllers/dashboardController.js');

// Rota para buscar as últimas medidas do silo
router.get('/buscarMedidasMeiaHora/:siloId', function (req, res) {
    // Passa o siloId para o controller
    dashboardController.buscarMedidasMeiaHora(req, res);
});

router.get('/buscarMedida?????/:siloId', function (req, res) {
  // Passa o siloId para o controller
  dashboardController.buscarMedidasMeiaHora(req, res);
});

module.exports = router;