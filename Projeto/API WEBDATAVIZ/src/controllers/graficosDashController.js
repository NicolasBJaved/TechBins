var graficosDashModel = require("../models/graficosDashModel");

function buscarDataHoraUltimaColeta(req, res) {

    var idEmpresa = req.params.idEmpresa;

    graficosDashModel.buscarDataHoraUltimaColeta(idEmpresa).then(function (resultado) {
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

function buscarUltimasMedidas(req, res) {

    var idGrafico = req.params.idGrafico;
    var idEmpresa = req.params.idEmpresa;

    graficosDashModel.buscarUltimasMedidas(idGrafico, idEmpresa).then(function (resultado) {
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

    var filtroTempo = req.params.filtroTempo;
    var filtroGrupo = req.params.filtroGrupo;
    var idGrafico = req.params.idGrafico;
    var idEmpresa = req.params.idEmpresa;
    var tempoFiltro;
    if (filtroTempo == 'mes') {
        tempoFiltro = 30;
    } else if (filtroTempo == 'semana') {
        tempoFiltro = 7;
    }

    graficosDashModel.atualizarGrafico(filtroTempo, filtroGrupo, idGrafico, idEmpresa, tempoFiltro).then(function (resultado) {
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
    atualizarGrafico,
    buscarDataHoraUltimaColeta
}