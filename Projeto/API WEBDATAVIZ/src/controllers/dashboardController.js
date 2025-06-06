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

module.exports ={
    mediaRota,
    mediaCincoPontos
}