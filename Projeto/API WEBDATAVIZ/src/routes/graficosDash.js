var express = require("express");
var router = express.Router();

var graficosDashController = require("../controllers/graficosDashController");

router.get("/dataHoraUltimaColeta/:idEmpresa", function (req, res) {
    graficosDashController.buscarDataHoraUltimaColeta(req, res);
});

router.get("/ultimas/:idGrafico/:idEmpresa", function (req, res) {
    graficosDashController.buscarUltimasMedidas(req, res);
});

router.get("/att/:filtroTempo/:filtroGrupo/:idGrafico/:idEmpresa", function (req, res) {
    graficosDashController.atualizarGrafico(req, res);
});

module.exports = router;