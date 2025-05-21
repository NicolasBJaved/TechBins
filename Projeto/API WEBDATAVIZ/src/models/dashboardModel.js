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
        INNER JOIN rota ro ON rep.idRepresentante = ro.idRepresentante
        INNER JOIN rotaPontoColeta rpc ON ro.idRota = rpc.idRota
        INNER JOIN pontoColeta pc ON rpc.idPontoColeta = pc.idPontoColeta
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
        GROUP BY ro.idRota, ro.nomeRota;
    `;
    console.log("Executando a instrução SQL: ", instrucao);
    return database.executar(instrucao);
}

function mediaCincoPontos(idUsuario){
    console.log("Entrou no model mediaCincoPontos");
    console.log(`idUsuario: ${idUsuario}`);

    var instrucao = `
        SELECT 
            pc.logradouro,
            ro.idRota,
            ROUND(AVG(r.distancia), 2) AS media_nivel_lixo
        FROM representante rep
        INNER JOIN empresa e ON rep.idEmpresa = e.idEmpresa
        INNER JOIN rota ro ON ro.idEmpresa = e.idEmpresa
        INNER JOIN pontoColeta pc ON e.idEmpresa = pc.idEmpresa
        INNER JOIN lixeira l ON pc.idPontoColeta = l.idPontoColeta
        INNER JOIN sensor s ON l.idLixeira = s.idLixeira
        INNER JOIN registro r ON s.idSensor = r.idSensor
        WHERE rep.idRepresentante = ${idUsuario} 
        GROUP BY pc.logradouro, ro.idRota
        ORDER BY media_nivel_lixo DESC LIMIT 5;
    `;
    console.log("Executando a instrução SQL: ", instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mediaRota,
    mediaCincoPontos
}