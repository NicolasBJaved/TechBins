var router = express.Router();
var bobIAController = require("../controllers/bobIAController");

router.post("/perguntar", function (req, res) {
    console.log("Entrou na rota /perguntar");
    bobIAController.gerarResposta(req, res);
});



module.exports = router;