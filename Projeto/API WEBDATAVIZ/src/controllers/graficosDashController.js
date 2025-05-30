var graficosDashModel = require("../models/graficosDashModel");

function buscarUltimasMedidas(req, res) {

    var idGrafico = req.params.idGrafico;

    graficosDashModel.buscarUltimasMedidas(idGrafico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function atualizarGrafico(req, res) {

    var filtro = req.params.filtro;
    var idGrafico = req.params.idGrafico;

    graficosDashModel.atualizarGrafico(filtro, idGrafico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    atualizarGrafico
}