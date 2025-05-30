var database = require("../database/config");

function buscarUltimasMedidas(idGrafico) {
    if (idGrafico == 1) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivelLixo
        GROUP BY logradouro
        ORDER BY media DESC LIMIT 3;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 2) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivelLixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') = 7
        GROUP BY logradouro
        ORDER BY media ASC LIMIT 3;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 3) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivelLixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') = 7 AND logradouro like 'Rua A'
        GROUP BY logradouro;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 4) {
        var instrucaoSql = `SELECT TIME(dataHoraMedicao) as horario, round(avg(nivel_lixo),0) as media 
        FROM view_nivelLixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') = 7 AND logradouro like 'Rua A'
        GROUP BY TIME(dataHoraMedicao)`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}

function atualizarGrafico(filtro, idGrafico) {
    if (filtro == 'semana' && idGrafico == 1) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivelLixo
        WHERE timestampdiff(day, dataHoraMedicao, '2025-05-30') = 7
        GROUP BY logradouro
        ORDER BY media desc limit 3`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (filtro == 'mes' && idGrafico == 1) {
        var instrucaoSql = `SELECT logradouro, round(avg(nivel_lixo),0) as media 
        FROM view_nivelLixo
        GROUP BY logradouro
        ORDER BY media DESC LIMIT 3;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}

module.exports = {
    buscarUltimasMedidas,
    atualizarGrafico
}