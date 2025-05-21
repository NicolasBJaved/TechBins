var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.post("/mediaRota", function (req, res) {
    console.log("Entrou na rota /mediaRota");
    dashboardController.mediaRota(req, res);
});

router.post("/mediaCincoPontos", function (req, res) {
    console.log("Entrou na rota /mediaCincoPontos");
    dashboardController.mediaCincoPontos(req, res);
}
);

module.exports = router;