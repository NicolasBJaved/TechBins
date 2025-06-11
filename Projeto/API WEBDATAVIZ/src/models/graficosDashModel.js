var database = require("../database/config");

function buscarDataHoraUltimaColeta(idEmpresa) {
    var instrucaoSql = `SELECT DATE_FORMAT(dataHoraMedicao, '%d/%m/%Y') as dataMedicao, TIME(dataHoraMedicao) as horaMedicao FROM view_nivellixo
    WHERE idEmpresa = ${idEmpresa}
    ORDER BY dataHoraMedicao DESC LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idGrafico, idEmpresa) {
    if (idGrafico == 1) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE idEmpresa = ${idEmpresa}
        GROUP BY logradouro
        ORDER BY media DESC LIMIT 3;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 2) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') <= 7 AND idEmpresa = ${idEmpresa}
        GROUP BY logradouro
        ORDER BY media ASC limit 3`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 3) {
        var instrucaoSql = `SELECT TIME(dataHoraMedicao) as horario, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') = 7 AND idEmpresa = ${idEmpresa} AND TIME(dataHoraMedicao) IN ('00:00:00', '06:00:00', '12:00:00', '18:00:00')
        GROUP BY TIME(dataHoraMedicao)
        ORDER BY horario DESC`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}

function atualizarGrafico(filtroTempo, filtroGrupo, idGrafico, idEmpresa, tempoFiltro) {
    if (filtroTempo != 'allTime' && filtroGrupo == 'ponto' && idGrafico == 1) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') <= ${tempoFiltro} AND idEmpresa = ${idEmpresa}
        GROUP BY logradouro
        ORDER BY media desc limit 3`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtroTempo != 'allTime' && filtroGrupo == 'rota' && idGrafico == 1) {
        var instrucaoSql = `SELECT nomeRota as rota, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') <= ${tempoFiltro} AND idEmpresa = ${idEmpresa}
        GROUP BY rota
        ORDER BY media desc limit 3`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtroTempo == 'allTime' && filtroGrupo == 'ponto' && idGrafico == 1) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE idEmpresa = ${idEmpresa}
        GROUP BY logradouro
        ORDER BY media DESC LIMIT 3;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtroTempo == 'allTime' && filtroGrupo == 'rota' && idGrafico == 1) {
        var instrucaoSql = `SELECT nomeRota as rota, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE idEmpresa = ${idEmpresa}
        GROUP BY rota
        ORDER BY media DESC LIMIT 3;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtroTempo != 'allTime' && filtroGrupo == 'ponto' && idGrafico == 2) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') <= ${tempoFiltro} AND idEmpresa = ${idEmpresa}
        GROUP BY logradouro
        ORDER BY media ASC limit 3`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtroTempo != 'allTime' && filtroGrupo == 'rota' && idGrafico == 2) {
        var instrucaoSql = `SELECT nomeRota as rota, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') <= ${tempoFiltro} AND idEmpresa = ${idEmpresa}
        GROUP BY rota
        ORDER BY media ASC limit 3`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtroTempo == 'allTime' && filtroGrupo == 'ponto' && idGrafico == 2) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE idEmpresa = ${idEmpresa}
        GROUP BY logradouro
        ORDER BY media ASC LIMIT 3;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

     if (filtroTempo == 'allTime' && filtroGrupo == 'rota' && idGrafico == 2) {
        var instrucaoSql = `SELECT nomeRota as rota, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE idEmpresa = ${idEmpresa}
        GROUP BY rota
        ORDER BY media ASC LIMIT 3;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtroTempo != 'allTime' && idGrafico == 3) {
        var instrucaoSql = `SELECT TIME(dataHoraMedicao) as horario, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') <= ${tempoFiltro} AND idEmpresa = ${idEmpresa} AND TIME(dataHoraMedicao) IN ('00:00:00', '06:00:00', '12:00:00', '18:00:00')
        GROUP BY TIME(dataHoraMedicao)
        ORDER BY horario DESC`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtroTempo == 'allTime' && idGrafico == 3) {
        var instrucaoSql = `SELECT TIME(dataHoraMedicao) as horario, round(avg(nivel_lixo),0) as media 
        FROM view_nivellixo
        WHERE idEmpresa = ${idEmpresa} AND TIME(dataHoraMedicao) IN ('00:00:00', '06:00:00', '12:00:00', '18:00:00')
        GROUP BY TIME(dataHoraMedicao)
        ORDER BY horario DESC`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}

module.exports = {
    buscarUltimasMedidas,
    atualizarGrafico,
    buscarDataHoraUltimaColeta
}