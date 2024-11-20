var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController.js");

//buscar silos por empresa, buscar sensor por silo
router.get("/:empresaId", function (req, res) {
  dashboardController.buscarSiloSensoresEmpresa(req, res);
});


module.exports = router;