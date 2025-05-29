var database = require("../database/config");

function buscarUltimasMedidas(idGrafico) {
    if (idGrafico == 1) {
        var instrucaoSql = `SELECT pst.nome as plano, count(*) as contagem 
        FROM usuario usu 
        INNER JOIN planoST pst on pst.idplanoST = usu.fk_idplanoST 
        GROUP BY plano`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 2) {
        var instrucaoSql = `SELECT est.regiao as regiao, count(*) as contagem
        FROM usuario usu
        INNER JOIN estado est on est.idestado = usu.fk_idestado
        GROUP BY regiao`;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 3) {
        var instrucaoSql = `SELECT desempenho, count(*) as contagem
        FROM 
        (SELECT 
        CASE 
            WHEN porcentagemAcertos = 1 THEN '100%'
            WHEN porcentagemAcertos >= 0.75 THEN 'Entre 75% e 99%'
            WHEN porcentagemAcertos >= 0.5 THEN 'Entre 50% e 74%'
            WHEN porcentagemAcertos >= 0.25 THEN 'Entre 25% e 49%'
            ELSE 'Abaixo de 25%'
        END AS desempenho
    FROM tentativaQuiz) as classificacao
    GROUP BY desempenho;`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    if (idGrafico == 4) {
        var instrucaoSql = `SELECT *
        FROM view_faixaIdade`;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }
}