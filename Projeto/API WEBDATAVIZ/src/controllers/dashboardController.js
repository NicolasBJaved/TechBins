var dashboardModel = require('../models/dashboardModel');

function mediaRota(req, res){
    var idUsuario = req.body.idUsuarioServer;

    dashboardModel.mediaRota(idUsuario)
    .then(function (resultado) {
        console.log("Resultado do model: ", resultado);
        res.status(200).json(resultado);
    })      
}

module.exports ={
    mediaRota
}