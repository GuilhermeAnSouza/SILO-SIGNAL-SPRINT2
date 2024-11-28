var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController.js");

//buscar silos por empresa, buscar sensor por silo
// router.get("/:empresaId", function (req, res) {
//   dashboardController.buscarSiloSensoresEmpresa(req, res);
// });

router.get("/kpis_silo1/:idEmpresa/:idSilo", function (req, res) {
  dashboardController.kpis_silo1(req, res);
});

router.get("/kpis_silo2/:idEmpresa/:idSilo", function (req, res) {
  dashboardController.kpis_silo2(req, res);
});

module.exports = router;