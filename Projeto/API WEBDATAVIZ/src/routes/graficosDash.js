var express = require("express");
var router = express.Router();

var graficosDashController = require("../controllers/graficosDashController");

router.get("/ultimas/:idGrafico", function (req, res) {
    graficosDashController.buscarUltimasMedidas(req, res);
});

router.get("/att/:filtro/:idGrafico", function (req, res) {
    graficosDashController.atualizarGrafico(req, res);
});

module.exports = router;