var database = require('../database/config');

function mediaRota(idUsuario) {
    console.log("Entrou no model mediaRota");
    console.log(`idUsuario: ${idUsuario}`);
    var instrucao = `
        SELECT 
            ro.idRota,
            ro.nomeRota,
            ROUND(AVG(ultimos_registros.distancia), 2) AS media_geral_rota
        FROM representante rep
        INNER JOIN rota ro ON rep.idEmpresa = ro.idEmpresa
        INNER JOIN rotapontocoleta rpc ON ro.idRota = rpc.idRota
        INNER JOIN pontocoleta pc ON rpc.idPontoColeta = pc.idPontoColeta
        INNER JOIN lixeira l ON pc.idPontoColeta = l.idPontoColeta
        INNER JOIN sensor s ON l.idLixeira = s.idLixeira
        INNER JOIN (
            SELECT r1.idSensor, r1.distancia
            FROM registro r1
            INNER JOIN (
                SELECT idSensor, MAX(dataHoraMedicao) AS ultima_data
                FROM registro
                GROUP BY idSensor
            ) r2 ON r1.idSensor = r2.idSensor AND r1.dataHoraMedicao = r2.ultima_data
        ) AS ultimos_registros ON s.idSensor = ultimos_registros.idSensor
        WHERE rep.idRepresentante = ${idUsuario}
        GROUP BY ro.idRota, ro.nomeRota
        ORDER BY media_geral_rota ;
    `;
    console.log("Executando a instrução SQL: ", instrucao);
    return database.executar(instrucao);
}

function mediaCincoPontos(idUsuario, rotasList) {
    console.log("Entrou no model mediaCincoPontos");
    console.log(`idUsuario: ${idUsuario}`);
    console.log("ROTAS LIST: " + rotasList.length);
    var listResposta = []
    var instrucao = `
        SELECT 
            pc.logradouro,
            ro.idRota,
            pc.idPontoColeta,
            ro.nomeRota,
            ROUND(AVG(ultimos_registros.distancia), 2) AS media_nivel_lixo
        FROM representante rep
        INNER JOIN empresa e ON rep.idEmpresa = e.idEmpresa
        INNER JOIN rota ro ON ro.idEmpresa = e.idEmpresa
        INNER JOIN rotapontocoleta rpc ON rpc.idRota = ro.idRota
        INNER JOIN pontocoleta pc ON rpc.idPontoColeta = pc.idPontoColeta
        INNER JOIN lixeira l ON pc.idPontoColeta = l.idPontoColeta
        INNER JOIN sensor s ON l.idLixeira = s.idLixeira
        INNER JOIN (
            SELECT r1.idSensor, r1.distancia
            FROM registro r1
            INNER JOIN (
                SELECT idSensor, MAX(dataHoraMedicao) AS ultima_data
                FROM registro
                GROUP BY idSensor
            ) r2 ON r1.idSensor = r2.idSensor AND r1.dataHoraMedicao = r2.ultima_data
        ) AS ultimos_registros ON s.idSensor = ultimos_registros.idSensor
        WHERE rpc.idRota IN (${rotasList}) 
        GROUP BY pc.logradouro, ro.idRota, pc.idPontoColeta, ro.nomeRota
        ORDER BY media_nivel_lixo;

        `;
    console.log("Executando a instrução SQL: ", instrucao);
    return database.executar(instrucao);
}

function pontosPorRota(idRota) {
    var instrucao = `
     SELECT
            pc.logradouro,
            pc.bairro,
            pc.idPontoColeta,
            ROUND(AVG(ultimos_registros.distancia), 2) AS media_nivel_lixo
        FROM rotapontocoleta rpc
        INNER JOIN pontocoleta pc ON rpc.idPontoColeta = pc.idPontoColeta
        INNER JOIN lixeira l ON pc.idPontoColeta = l.idPontoColeta
        INNER JOIN sensor s ON l.idLixeira = s.idLixeira
        INNER JOIN (
            SELECT r1.idSensor, r1.distancia
            FROM registro r1
            INNER JOIN (
                SELECT idSensor, MAX(dataHoraMedicao) AS ultima_data
                FROM registro
                GROUP BY idSensor
            ) r2 ON r1.idSensor = r2.idSensor AND r1.dataHoraMedicao = r2.ultima_data
        ) AS ultimos_registros ON s.idSensor = ultimos_registros.idSensor
        WHERE rpc.idRota = ${idRota}
        GROUP BY pc.logradouro, pc.bairro, pc.idPontoColeta
        ORDER BY media_nivel_lixo;
    `;
    return database.executar(instrucao);
}

function lixeirasPorPonto(idPontoColeta) {
    var instrucao = `
        SELECT 
            l.idLixeira,
            ROUND(r.distancia, 2) AS nivel
        FROM lixeira l
        INNER JOIN sensor s ON l.idLixeira = s.idLixeira
        INNER JOIN (
            SELECT idSensor, MAX(dataHoraMedicao) AS ultima_data
            FROM registro
            GROUP BY idSensor
        ) ult ON s.idSensor = ult.idSensor
        INNER JOIN registro r ON s.idSensor = r.idSensor AND r.dataHoraMedicao = ult.ultima_data
        WHERE l.idPontoColeta = ${idPontoColeta}
        ORDER BY l.idLixeira;
    `;
    return database.executar(instrucao);
}

module.exports = {
    mediaRota,
    mediaCincoPontos,
    pontosPorRota,
    lixeirasPorPonto
}