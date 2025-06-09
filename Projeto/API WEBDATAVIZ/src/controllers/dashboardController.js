var dashboardModel = require('../models/dashboardModel');

function mediaRota(req, res){
    var idUsuario = req.body.idUsuarioServer;

    dashboardModel.mediaRota(idUsuario)
    .then(function (resultado) {
        console.log("Resultado do model: ", resultado);
        res.status(200).json(resultado);
    })      
}

function mediaCincoPontos(req, res){
    console.log("ENTROU NO MÉDIA CINCO PONTO")
    var idUsuario = req.body.idUsuarioServer;
    var rotasList = req.body.rotasListServer;

    dashboardModel.mediaCincoPontos(idUsuario, rotasList)
    .then(function (resultado) {
        console.log("Resultado do model: ", resultado);
        res.status(200).json(resultado);
    });
}

function pontosPorRota(req, res) {
    var idRota = req.body.idRotaServer;
    dashboardModel.pontosPorRota(idRota)
    .then(function (resultado) {
        res.status(200).json(resultado);
    });
}

function lixeirasPorPonto(req, res) {
    const { idPontoServer } = req.body;
    dashboardModel.lixeirasPorPonto(idPontoServer)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports ={
    mediaRota,
    mediaCincoPontos,
    pontosPorRota,
    lixeirasPorPonto
}